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

@Module({ dynamic: true, store, name: "administrator", namespaced: true })
class Administrator extends VuexModule {
    // state
    public administrator: AdministratorState | null = null;

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
        const response = await window.axios.post("/api/login", payload);
        this.SET_ADMINISTRATOR(response.data);
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
