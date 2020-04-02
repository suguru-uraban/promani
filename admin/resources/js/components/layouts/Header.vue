<template>
  <div class="header">
    <div class="header__title">
      <img src="../../../images/logo_admin.svg" height="48" alt="プロまに" class="header__logo" />管理画面v1.0.0
    </div>
    <div class="header__user" @mouseover="usermenuover" @mouseleave="usermenuleave">
      <fas icon="user" class="header__icon" />
      <span class="header__username">{{username}}</span>
      <ul :class="['header__usermenu', {isOpen: isOpen}]">
        <li class="header__usermenulist">
          <a href="javascript:void(0)" class="header__usermenulink" @click="logout">ログアウト</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AdministratorModule from '../../store/administrator';

@Component
export default class Header extends Vue {
  isOpen: boolean = false;

  public usermenuover() {
    this.isOpen = true;
  }
  public usermenuleave() {
    this.isOpen = false;
  }
  public async logout() {
    await AdministratorModule.logout();
    this.$router.push('/login');
  }

  get username() {
    return AdministratorModule.username;
  }
}
</script>

<style lang="scss" scoped>
@import 'resources/sass/variables';

.header {
  padding: 8px 16px;
  width: 100%;
  min-width: 1000px;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  background: #cccccc;
  z-index: 2;
  &__title {
    font-size: 1.6rem;
    color: $color-font-title;
  }
  &__logo {
    margin-right: 8px;
    vertical-align: bottom;
  }
  &__user {
    padding: 0 8px 0 24px;
    height: 32px;
    font-size: 0;
    color: $color-font-over;
    line-height: 30px;
    display: inline-block;
    position: absolute;
    top: 16px;
    right: 16px;
    box-sizing: border-box;
    border-radius: 8px;
    cursor: pointer;
  }
  &__icon {
    margin: auto;
    margin-right: 8px;
    width: 16px;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    color: $color-font-over;
  }
  &__username {
    padding-right: 20px;
    font-size: 1.6rem;
    vertical-align: super;
    position: relative;
    &:after {
      width: 8px;
      height: 8px;
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      border-right: $color-font-over solid 3px;
      border-bottom: $color-font-over solid 3px;
      transform: rotate(45deg);
    }
  }
  &__usermenu {
    padding: 8px;
    width: 100%;
    position: absolute;
    top: 30px;
    left: 0;
    display: none;
    list-style: none;
    box-sizing: border-box;
    border-radius: 4px;
    border: #eeeeee solid 1px;
    background: #ffffff;
    box-shadow: 3px 3px 4px 2px rgba(0, 0, 0, 0.2);
  }
  &__usermenulist {
    height: 24px;
    border-radius: 4px;
  }
  &__usermenulink {
    padding: 0 8px;
    height: 24px;
    font-size: 1.4rem;
    color: $color-font-link;
    line-height: 24px;
    text-decoration: none;
    display: block;
    border-radius: 4px;
    &:hover {
      color: $color-font-hover;
      background: $color-admin-linkover;
    }
  }
}
</style>
