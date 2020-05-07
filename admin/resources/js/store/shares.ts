// library
import { Mutation, Action, VuexModule, getModule, Module } from 'vuex-module-decorators';

// store
import store from '.';

// state type
import { ShareState } from '../types/stateType';

// util
import { OK, UNPROCESSABLE_ENTITY } from '../util/status';

@Module({ dynamic: true, store, name: 'SharesModule', namespaced: true })
class Shares extends VuexModule {
  // state
  public shares: ShareState[] = [];
  public apiStatus: boolean | null = null;
  public sharesError: boolean = false;

  // getter
  public get sharesData(): ShareState[] {
    return this.shares ? this.shares : [];
  }

  // mutation
  @Mutation
  private SET_SHARES(payload: ShareState[]) {
    this.shares = payload;
  }
  @Mutation
  private SET_API_STATUS(payload: boolean) {
    this.apiStatus = payload;
  }
  @Mutation
  public SET_SHARES_ERROR(payload: boolean) {
    this.sharesError = payload;
  }

  // actions
  // 共有情報登録
  @Action({})
  public async postShares(payload: ShareState[]) {
    const response = await window.axios.post('/api/share', payload);
    if (response.status === OK) {
      this.SET_API_STATUS(true);
      this.SET_SHARES(response.data);
      return;
    }
    this.SET_API_STATUS(false);
    if (response.status === UNPROCESSABLE_ENTITY) {
      this.SET_SHARES_ERROR(true);
    }
  }
  // 共有情報取得
  @Action({})
  public async getShares() {
    const response = await window.axios.get('/api/share');
    const shares: ShareState[] | null = response.data || null;
    if (response.status === OK) {
      this.SET_API_STATUS(true);
      this.SET_SHARES(shares);
      return;
    }
    this.SET_API_STATUS(false);
  }
}

export default getModule(Shares);
