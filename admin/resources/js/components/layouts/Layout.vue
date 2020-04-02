<template>
  <div class="layout">
    <Header />
    <SideNav />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './Header.vue';
import SideNav from './SideNav.vue';

@Component({
  components: {
    Header,
    SideNav,
  },
})
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>
@import 'resources/sass/variables';

.layout {
  padding: 104px 16px 0 176px;
  min-width: 1000px;
  position: relative;
  &__body {
    width: 100%;
  }
}
</style>
