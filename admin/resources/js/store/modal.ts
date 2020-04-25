// library
import { Mutation, VuexModule, getModule, Module } from 'vuex-module-decorators';

// store
import store from '.';

// state type
import { ModalState } from '../types/stateType';
import { ModalType } from '../types/stateType';

@Module({ dynamic: true, store, name: 'ModalModule', namespaced: true })
class Modal extends VuexModule {
  // state
  public Modal: ModalState = {
    modalType: null,
  };

  // getter
  public get modalType(): ModalType {
    return this.Modal.modalType;
  }

  // mutation
  @Mutation
  public SET_MODALOPEN(payload: ModalType) {
    this.Modal.modalType = payload;
  }
}

export default getModule(Modal);
