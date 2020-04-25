// library
import { Mutation, VuexModule, getModule, Module } from 'vuex-module-decorators';

// store
import store from '.';

@Module({ dynamic: true, store, name: 'ErrorModule', namespaced: true })
class Error extends VuexModule {
  // state
  public code: number | null = null;

  // mutation
  @Mutation
  public SET_ERROR(payload: number) {
    this.code = payload;
  }
}

export default getModule(Error);
