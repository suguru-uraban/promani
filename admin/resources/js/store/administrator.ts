// library
import { Mutation, Action, VuexModule, getModule, Module } from 'vuex-module-decorators';

// store
import store from '.';

// state type
import { AdministratorState, RegisterState, LoginState } from '../types/stateType';

// store module
import ErrorModule from '../store/error';

// util
import { OK, UNPROCESSABLE_ENTITY } from '../util/status';

@Module({ dynamic: true, store, name: 'AdministratorModule', namespaced: true })
class Administrator extends VuexModule {
  // state
  private administrator: AdministratorState | null = null;
  public apiStatus: boolean | null = null;
  public loginError: boolean = false;
  public registerError: boolean = false;

  // getter
  public get check(): boolean {
    return !!this.administrator;
  }
  public get userName(): string {
    return this.administrator ? this.administrator.name : '';
  }
  public get administratorAuth(): number {
    return this.administrator ? this.administrator.administrator_auth : 0;
  }
  public get creatorAuth(): number {
    return this.administrator ? this.administrator.creator_auth : 0;
  }
  public get companyAuth(): number {
    return this.administrator ? this.administrator.company_auth : 0;
  }

  // mutation
  @Mutation
  private SET_ADMINISTRATOR(payload: AdministratorState) {
    this.administrator = payload;
  }
  @Mutation
  private SET_API_STATUS(payload: boolean) {
    this.apiStatus = payload;
  }
  @Mutation
  public SET_LOGIN_ERROR(payload: boolean) {
    this.loginError = payload;
  }
  @Mutation
  public SET_REGISTER_ERROR(payload: boolean) {
    this.registerError = payload;
  }

  // actions
  // 管理者登録
  @Action({})
  public async register(payload: RegisterState) {
    const response = await window.axios.post('/api/register', payload);
    if (response.status === OK) {
      this.SET_API_STATUS(true);
      this.SET_ADMINISTRATOR(response.data);
      return;
    }
    this.SET_API_STATUS(false);
    if (response.status === UNPROCESSABLE_ENTITY) {
      this.SET_REGISTER_ERROR(true);
    } else {
      ErrorModule.SET_ERROR(response.status);
    }
  }
  // ログイン
  @Action({})
  public async login(payload: LoginState) {
    const response = await window.axios.post('/api/login', payload);
    if (response.status === OK) {
      this.SET_API_STATUS(true);
      this.SET_ADMINISTRATOR(response.data);
      return;
    }
    this.SET_API_STATUS(false);
    if (response.status === UNPROCESSABLE_ENTITY) {
      this.SET_LOGIN_ERROR(true);
    } else {
      ErrorModule.SET_ERROR(response.status);
    }
  }
  // ログアウト
  @Action({})
  public async logout() {
    const response = await window.axios.post('/api/logout');
    if (response.status === OK) {
      this.SET_API_STATUS(true);
      this.SET_ADMINISTRATOR(null);
      return;
    }
    this.SET_API_STATUS(false);
    ErrorModule.SET_ERROR(response.status);
  }
  // ログイン管理者取得
  @Action({})
  public async currentAdministrator() {
    const response = await window.axios.get('/api/administrator');
    const administrator = response.data || null;
    if (response.status === OK) {
      this.SET_API_STATUS(true);
      this.SET_ADMINISTRATOR(administrator);
      return;
    }
    this.SET_API_STATUS(false);
    ErrorModule.SET_ERROR(response.status);
  }
}

export default getModule(Administrator);
