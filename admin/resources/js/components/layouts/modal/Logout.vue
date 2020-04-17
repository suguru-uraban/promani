<template>
  <div class="modal_logout">
    <p class="modal_logout__caption">
      ログアウトします。
      <br />よろしいですか？
    </p>
    <ul class="modal_logout__button">
      <li class="modal_logout__button_parts">
        <button class="medium cancel login__button" @click="modalClose">キャンセル</button>
      </li>
      <li class="modal_logout__button_parts">
        <button class="medium ok login__button" @click="logout">ログアウト</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AdministratorModule from '../../../store/administrator';
import ModalModule from '../../../store/modal';

@Component
export default class ModalLogout extends Vue {
  public async logout() {
    await AdministratorModule.logout();
    this.$router.push('/login');
    window.scroll(0, 0);
  }

  public modalClose() {
    ModalModule.SET_MODALOPEN(null);
  }
}
</script>

<style lang="scss" scoped>
@import 'resources/sass/variables';

.modal_logout {
  margin: auto;
  width: 100%;
  display: table-cell;
  vertical-align: middle;
  &__caption {
    font-size: 1.8rem;
    color: $color-font-black;
    line-height: 1.4;
    text-align: center;
  }
  &__button {
    margin: 0 24px;
    padding: 0;
    margin-top: 24px;
    display: flex;
    justify-content: space-around;
    list-style: none;
  }
  &__button_parts {
    width: 150px;
  }
}
</style>
