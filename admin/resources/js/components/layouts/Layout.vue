<template>
  <div class="layout">
    <Header />
    <SideNav />
    <Breadcrumbs />
    <slot></slot>
    <Modal />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './Header.vue';
import SideNav from './SideNav.vue';
import Breadcrumbs from './Breadcrumbs.vue';
import Modal from './Modal.vue';

@Component({
  components: {
    Header,
    SideNav,
    Breadcrumbs,
    Modal,
  },
})
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>
@import 'resources/sass/variables';

.layout {
  padding: 120px 16px 0 176px;
  min-width: 1000px;
  position: relative;
  box-sizing: border-box;
  &__body {
    width: 100%;
  }
}
</style>
