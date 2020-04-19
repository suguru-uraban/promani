<template>
  <div class="modal" id="modal" v-if="!!modalType" @click.self="modalClose">
    <div class="modal__body">
      <a href="javascript:void(0)" class="modal__close" @click="modalClose">
        <fas icon="times" class="modal__icon" />
      </a>
      <div class="modal__inner">
        <ModalLogout v-if="modalType === 'logout'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import ModalLogout from './modal/Logout.vue';
import ModalModule from '../../store/modal';

@Component({
  components: {
    ModalLogout,
  },
})
export default class Modal extends Vue {
  mounted() {
    const modal = document.getElementById('modal');
    disableBodyScroll(modal);
  }
  beforeDestory() {
    clearAllBodyScrollLocks();
  }

  public modalClose() {
    ModalModule.SET_MODALOPEN(null);
  }

  get modalType() {
    return ModalModule.modalType;
  }
}
</script>

<style lang="scss" scoped>
@import 'resources/sass/variables';

.modal {
  margin: auto;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  &__body {
    margin: auto;
    width: 400px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    box-shadow: 6px 6px 4px 0 rgba(0, 0, 0, 0.6);
    background: $color-admin-bg-modal;
  }
  &__inner {
    padding: 24px;
    width: 100%;
    height: 100%;
    display: table;
    position: relative;
    box-sizing: border-box;
  }
  &__close {
    width: 32px;
    height: 32px;
    display: block;
    position: absolute;
    top: 4px;
    right: 4px;
    z-index: 1;
  }
  &__icon {
    width: 32px;
    height: 32px;
    color: $color-font-steelgrey;
  }
}
</style>
