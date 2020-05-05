<template>
  <div class="layout">
    <Header />
    <SideNav />
    <Breadcrumbs />
    <slot></slot>
    <Modal v-if="modalType" />
  </div>
</template>

<script lang="ts">
// library
import { Component, Vue } from 'vue-property-decorator';

// component
import Header from './Header.vue';
import SideNav from './SideNav.vue';
import Breadcrumbs from './Breadcrumbs.vue';
import Modal from './Modal.vue';

// store module
import ModalModule from '../../store/modal';

@Component({
  components: {
    Header,
    SideNav,
    Breadcrumbs,
    Modal,
  },
})
export default class Layout extends Vue {
  get modalType() {
    return ModalModule.modalType;
  }
}
</script>

<style lang="scss" scoped>
@import 'resources/sass/variables';

.layout {
  padding: 120px 16px 0 176px;
  width: calc(100vw - 15px);
  min-width: 1000px;
  position: relative;
  box-sizing: border-box;
}
</style>
