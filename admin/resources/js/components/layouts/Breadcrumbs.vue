<template>
  <ul class="breadcrumbs">
    <li class="breadcrumbs__list">
      <fas icon="home" class="breadcrumbs__homeicon" />
    </li>
    <li class="breadcrumbs__list">
      <span class="breadcrumbs__list_inner">管理者</span>
    </li>
    <li class="breadcrumbs__list">
      <span class="breadcrumbs__list_inner">一覧</span>
    </li>
  </ul>
</template>

<script lang="ts">
// library
import { Component, Vue } from 'vue-property-decorator';
// import AdministratorModule from '../../store/administrator';

@Component
export default class SideNav extends Vue {
  public link(path: string) {
    if (this.$route.path !== path) {
      this.$router.push(path);
      window.scroll(0, 0);
    }
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
  background: $color-admin-bg-header;
  z-index: 1;
  &__list {
    padding: 0 16px 0 32px;
    height: 30px;
    line-height: 30px;
    font-size: 1.4rem;
    vertical-align: middle;
    display: inline-block;
    position: relative;
    overflow: hidden;
    &:before {
      margin: auto;
      width: 24px;
      height: 24px;
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: -14px;
      bottom: 0;
      border-top: $color-admin-secondary solid 1px;
      border-right: $color-admin-secondary solid 1px;
      transform: rotate(45deg);
      pointer-events: none;
    }
    &:first-child {
      padding: 0 16px;
      width: 16px;
      padding-left: 0;
      &:before {
        content: none;
      }
    }
    &:last-child {
      font-size: 1.4rem;
      font-weight: bold;
    }
  }
  &__list_inner {
    color: $color-font-steelgrey;
  }
  &__homeicon {
    margin: auto;
    width: 16px;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    color: $color-font-steelgrey;
  }
}
</style>
