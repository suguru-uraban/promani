<template>
  <nav class="sidenav">
    <ul class="sidenav__menu">
      <li class="sidenav__menulist" v-for="(menu, index) in menus" :key="'menu' + menu.id">
        <div class="sidenav__menulist_block disable" v-if="userAuth(menu.authType) < menu.auth">
          <fas :prefix="menu.prefix" :icon="menu.icon" class="sidenav__icon disable" />
          {{ menu.value }}
        </div>
        <a
          href="javascript:void(0)"
          class="sidenav__menulist_block"
          v-if="!menu.child && userAuth(menu.authType) >= menu.auth"
          @click="link(menu.path)"
        >
          <fas :prefix="menu.prefix" :icon="menu.icon" class="sidenav__icon" />
          {{ menu.value }}
        </a>
        <div
          class="sidenav__menulist_block"
          v-if="menu.child && userAuth(menu.authType) >= menu.auth"
          @mouseover="sidenavover(index)"
          @mouseleave="sidenavleave(index)"
        >
          <fas :prefix="menu.prefix" :icon="menu.icon" class="sidenav__icon" />
          {{ menu.value }}
          <ul :class="['sidenav__child', { isOpen: menu.isOpen }]">
            <li class="sidenav__childmenu" v-for="child in children" :key="'child' + child.id">
              <a
                href="javascript:void(0)"
                class="sidenav__childlink"
                v-if="userAuth(menu.authType) >= child.auth"
                @click="link('/' + menu.name + '/' + child.name)"
              >
                <fas :prefix="child.prefix" :icon="child.icon" class="sidenav__icon" />
                {{ child.value }}
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>

    <ul class="sidenav__menu">
      <li class="sidenav__menulist" v-for="config in configs" :key="'config' + config.id">
        <div class="sidenav__menulist_block disable" v-if="administratorAuth < config.auth">
          <fas :prefix="config.prefix" :icon="config.icon" class="sidenav__icon disable" />
          {{ config.value }}
        </div>
        <a
          href="javascript:void(0)"
          class="sidenav__menulist_block"
          v-if="administratorAuth >= config.auth"
          @click="link(config.path)"
        >
          <fas :prefix="config.prefix" :icon="config.icon" class="sidenav__icon" />
          {{ config.value }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AdministratorModule from '../../store/administrator';

declare function require(x: string): { [key: string]: string | number | boolean }[];
const sidenavMenu = require('../../data/sidenavMenu.json');
const sidenavMenuChild = require('../../data/sidenavMenuChild.json');
const sidenavConfig = require('../../data/sidenavConfig.json');

@Component
export default class SideNav extends Vue {
  menus = sidenavMenu;
  children = sidenavMenuChild;
  configs = sidenavConfig;

  public sidenavover(index: number) {
    this.menus[index].isOpen = true;
  }
  public sidenavleave(index: number) {
    this.menus[index].isOpen = false;
  }
  public link(path: string) {
    if (this.$route.path !== path) {
      this.$router.push(path);
      window.scroll(0, 0);
    }
  }
  public userAuth(authType: string) {
    if (authType === 'administrator') {
      return AdministratorModule.administratorAuth;
    } else if (authType === 'creator') {
      return AdministratorModule.creatorAuth;
    } else if (authType === 'company') {
      return AdministratorModule.companyAuth;
    }
  }

  get administratorAuth() {
    return AdministratorModule.administratorAuth;
  }
}
</script>

<style lang="scss" scoped>
@import 'resources/sass/variables';

.sidenav {
  width: 160px;
  height: calc(100vh - 64px);
  display: block;
  position: fixed;
  top: 64px;
  left: 0;
  box-shadow: 6px 6px 4px 2px rgba(0, 0, 0, 0.2);
  background: $color-admin-secondary;
  z-index: 2;
  &:after {
    width: 12px;
    height: 32px;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 160px;
    box-sizing: border-box;
    border-top: $color-admin-secondary solid 2px;
    background: #cccccc;
  }
  &__menu {
    margin: 24px 0 0;
    padding: 0;
    list-style: none;
    border-top: $color-admin-border solid 1px;
    &:first-child {
      margin: 0;
      border-top: none;
    }
  }
  &__menulist {
    width: 100%;
    height: 40px;
    border-bottom: $color-admin-border solid 1px;
  }
  &__menulist_block {
    padding: 0 8px 0 32px;
    height: 40px;
    font-size: 1.2rem;
    color: $color-font-over;
    line-height: 40px;
    text-decoration: none;
    display: block;
    position: relative;
    &:hover {
      background: $color-admin-menuover;
    }
  }
  &__icon {
    margin: auto;
    margin-right: 8px;
    width: 18px;
    font-size: 2rem;
    color: $color-font-over;
    position: absolute;
    top: 0;
    left: 8px;
    bottom: 0;
  }
  &__child {
    margin: 0;
    padding: 0;
    width: 160px;
    display: none;
    position: absolute;
    top: -1px;
    left: 160px;
    list-style: none;
    border-radius: 0 2px 2px 0;
    box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2);
    border-top: $color-admin-border solid 1px;
    border-right: $color-admin-border solid 1px;
    border-bottom: $color-admin-border solid 1px;
    background: $color-admin-menuover;
    z-index: 1;
  }
  &__childmenu {
    margin: 0;
    position: relative;
    box-sizing: border-box;
  }
  &__childlink {
    margin: 4px 8px;
    padding: 0 8px 0 32px;
    height: 32px;
    color: $color-font-over;
    line-height: 32px;
    text-decoration: none;
    display: block;
    position: relative;
    border-radius: 2px;
    &:hover {
      color: $color-font-hover;
      background: $color-admin-linkover;
      .sidenav__icon {
        color: $color-font-hover;
      }
    }
  }
  .disable {
    color: $color-font-disable;
    cursor: not-allowed;
    &:hover {
      background: transparent;
    }
  }
}
</style>
