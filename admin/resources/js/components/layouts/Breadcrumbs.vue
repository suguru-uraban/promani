<template>
  <ul class="breadcrumbs">
    <li class="breadcrumbs__list">
      <fas icon="home" class="breadcrumbs__homeicon" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AdministratorModule from '../../store/administrator';

@Component
export default class SideNav extends Vue {
  public link(path: string) {
    if (this.$route.path !== path) {
      this.$router.push(path);
      window.scroll(0, 0);
    }
  }

  get userAuth() {
    return AdministratorModule.userAuth;
  }
}
</script>

<style lang="scss" scoped>
@import 'resources/sass/variables';

.breadcrumbs {
  margin: 0;
  padding: 0 16px;
  width: calc(100% - 160px);
  min-width: calc(1000px - 160px);
  height: 32px;
  font-size: 0;
  position: fixed;
  top: 64px;
  left: 160px;
  list-style: none;
  box-sizing: border-box;
  box-shadow: 6px 6px 4px 2px rgba(0, 0, 0, 0.2);
  border-top: $color-admin-secondary solid 2px;
  background: #cccccc;
  z-index: 1;
  &__list {
    padding: 0 16px;
    height: 30px;
    line-height: 30px;
    font-size: 1.4rem;
    display: inline-block;
    position: relative;
    &:first-child {
      width: 16px;
      padding-left: 0;
    }
  }
  &__homeicon {
    margin: auto;
    width: 16px;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    color: $color-font-disable;
  }
}
</style>
