<template>
  <Layout>
    <div class="home">
      <main class="home__body">
        <p>ユーザー登録</p>
      </main>
    </div>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Layout from './layouts/Layout.vue';
import AdministratorModule from '../store/administrator';

@Component({
  components: {
    Layout,
  },
})
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
  &__body {
    width: 100%;
  }
}
</style>
