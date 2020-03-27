<template>
  <div class="home">
    <main class="home__body">
      <p>{{username}}</p>
      <p>ユーザー登録</p>
      <p>
        <span @click="logout">ログアウト</span>
      </p>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AdministratorModule from '../store/administrator';

@Component
export default class Login extends Vue {
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

.home {
  padding: 40px 0 0 40px;
  &__body {
    width: 100%;
  }
}
</style>
