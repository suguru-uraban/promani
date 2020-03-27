import {
    Mutation,
    Action,
    VuexModule,
    getModule,
    Module
} from "vuex-module-decorators";
import store from ".";
import {
    AdministratorState,
    RegisterState,
    LoginState
} from "../types/stateType";
import ErrorModule from "../store/error";
import { OK, UNPROCESSABLE_ENTITY } from "../util/status";

@Module({ dynamic: true, store, name: "AdministratorModule", namespaced: true })
class Administrator extends VuexModule {
    // state
    private administrator: AdministratorState | null = null;
    public apiStatus: boolean | null = null;
    public loginError: boolean = false;

    // getter
    public get check(): boolean {
        return !!this.administrator;
    }
    public get username(): string {
        return this.administrator ? this.administrator.name : "";
    }

    // mutation
    @Mutation
    public SET_ADMINISTRATOR(payload: AdministratorState) {
        this.administrator = payload;
    }
    @Mutation
    public SET_APISTATUS(payload: boolean) {
        this.apiStatus = payload;
    }
    @Mutation
    public SET_LOGINERROR(payload: boolean) {
        this.loginError = payload;
    }

    // actions
    // 管理者登録
    @Action({})
    public async register(payload: RegisterState) {
        const response = await window.axios.post("/api/register", payload);
        this.SET_ADMINISTRATOR(response.data);
    }
    // ログイン
    @Action({})
    public async login(payload: LoginState) {
        const response = await window.axios
            .post("/api/login", payload)
            .catch(err => err.response || err);
        if (response.status === OK) {
            this.SET_APISTATUS(true);
            this.SET_ADMINISTRATOR(response.data);
            return;
        }
        this.SET_APISTATUS(false);
        if (response.status === UNPROCESSABLE_ENTITY) {
            this.SET_LOGINERROR(true);
        } else {
            ErrorModule.SET_ERROR(response.status);
        }
    }
    // ログアウト
    @Action({})
    public async logout() {
        await window.axios.post("/api/logout");
        this.SET_ADMINISTRATOR(null);
    }
    // ログイン管理者取得
    @Action({})
    public async currentAdministrator() {
        const response = await window.axios.get("/api/administrator");
        const administrator = response.data || null;
        this.SET_ADMINISTRATOR(administrator);
    }
}

export default getModule(Administrator);
