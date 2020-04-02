<template>
  <nav class="sidenav">
    <ul class="sidenav__menu">
      <li class="sidenav__menulist" v-for="(menu, index) in menus" :key="'menu' + menu.id">
        <a href="javascript:void(0)" class="sidenav__menulist_block" v-if="!menu.child">
          <fas :prefix="menu.prefix" :icon="menu.icon" class="sidenav__icon" />
          {{menu.value}}
        </a>
        <div
          class="sidenav__menulist_block"
          v-if="menu.child"
          @mouseover="sidenavover(index)"
          @mouseleave="sidenavleave(index)"
        >
          <fas :prefix="menu.prefix" :icon="menu.icon" class="sidenav__icon" />
          {{menu.value}}
          <ul :class="['sidenav__child', {isOpen: menu.isOpen}]">
            <li class="sidenav__childmenu" v-for="child in children" :key="'child' + child.id">
              <a
                href="javascript:void(0)"
                class="sidenav__childlink"
                @click="link('/' + menu.name + child.name)"
              >
                <fas :prefix="child.prefix" :icon="child.icon" class="sidenav__icon" />
                {{child.value}}
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SideNav extends Vue {
  menus: { [key: string]: string | boolean }[] = [
    { id: '0', value: 'ホーム', child: false, prefix: 'fas', icon: 'home' },
    {
      id: '1',
      value: '管理者',
      child: true,
      prefix: 'fas',
      icon: 'user',
      isOpen: false,
      name: 'administrator',
    },
  ];
  children: { [key: string]: string | boolean }[] = [
    { id: '0', value: '一覧', prefix: 'fas', icon: 'list', name: '_list' },
    { id: '1', value: '新規登録', prefix: 'fas', icon: 'user-plus', name: '_regist' },
  ];

  public sidenavover(index) {
    this.menus[index].isOpen = true;
  }
  public sidenavleave(index) {
    this.menus[index].isOpen = false;
  }
  public link(path) {
    this.$router.push(path);
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
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
  background: $color-admin-secondary;
  z-index: 1;
  &__menu {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  &__menulist {
    width: 100%;
    height: 32px;
    border-bottom: $color-admin-border solid 1px;
  }
  &__menulist_block {
    padding: 0 8px 0 28px;
    height: 32px;
    font-size: 1.4rem;
    color: $color-font-over;
    line-height: 32px;
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
    width: 14px;
    height: auto;
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
    padding: 4px 8px;
    height: 32px;
    position: relative;
    box-sizing: border-box;
  }
  &__childlink {
    padding: 0 8px 0 28px;
    height: 24px;
    color: $color-font-over;
    line-height: 24px;
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
}
</style>
