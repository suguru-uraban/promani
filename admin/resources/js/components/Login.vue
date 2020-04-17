<template>
  <div class="login">
    <main class="login__body">
      <h1 class="login__title">
        <img src="../../images/logo_admin.svg" width="200" alt="プロまに" class="login__logo" />管理画面v1.0.0
      </h1>
      <ValidationObserver v-slot="{ handleSubmit }">
        <ValidationProvider
          name="メールアドレス"
          rules="required|email"
          :bails="false"
          v-slot="{ classes, errors }"
        >
          <dl class="login__form" :class="classes">
            <dt class="login__form-title">
              <fas icon="envelope" class="login__icon" />メールアドレス
            </dt>
            <dd class="login__form-wrap">
              <input
                type="text"
                placeholder="user@example.com"
                class="login__form-parts"
                v-model="email"
              />
              <span class="error-baloon">{{ errors[0] }}</span>
            </dd>
          </dl>
        </ValidationProvider>
        <ValidationProvider
          name="パスワード"
          rules="required"
          :bails="false"
          v-slot="{ classes, errors }"
        >
          <dl class="login__form" :class="classes">
            <dt class="login__form-title">
              <fas icon="key" class="login__icon" />パスワード
            </dt>
            <dd class="login__form-wrap">
              <input
                type="password"
                placeholder="password"
                class="login__form-parts"
                v-model="password"
              />
              <span class="error-baloon">{{ errors[0] }}</span>
            </dd>
          </dl>
        </ValidationProvider>
        <button class="medium ok login__button" @click="handleSubmit(onSubmit)">ログイン</button>
      </ValidationObserver>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AdministratorModule from '../store/administrator';

@Component
export default class Login extends Vue {
  email: string = '';
  password: string = '';

  get apiStatus() {
    return AdministratorModule.apiStatus;
  }
  get loginErrors() {
    return AdministratorModule.loginError;
  }

  public async onSubmit() {
    const params = {
      email: this.email,
      password: this.password,
    };
    await AdministratorModule.login(params);
    if (this.apiStatus) {
      this.$router.push('/');
      window.scroll(0, 0);
      return;
    }
    if (this.loginErrors) {
      this.$toasted.show('メールアドレスかパスワードが間違っています');
      AdministratorModule.SET_LOGIN_ERROR(false);
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'resources/sass/variables';

.login {
  margin: auto;
  min-width: calc(1000px - (16px * 2));
  height: calc(100vh - 15px - (16px * 2));
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  bottom: 16px;
  border-radius: 8px;
  background-color: $color-admin-secondary;
  background-image: url('../../images/bg-admin-maki.svg');
  background-position: top 24px right 40px;
  background-repeat: no-repeat;
  background-size: 400px auto;
  &__body {
    margin: auto;
    padding: 16px;
    width: 400px;
    height: 344px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 16px;
    box-shadow: 8px 8px 4px 0 rgba(0, 0, 0, 0.2);
  }
  &__title {
    font-size: 1.6rem;
    color: $color-font-steelgrey;
    text-align: center;
  }
  &__logo {
    margin-right: 8px;
    vertical-align: bottom;
  }
  &__form {
    margin: 24px 48px 0;
    padding: 0;
    list-style: none;
  }
  &__form-title {
    margin-bottom: 8px;
    color: #666666;
    font-weight: bold;
  }
  &__form-wrap {
    margin: 0 24px 0 0;
    position: relative;
  }
  &__form-parts {
    width: 100%;
    &::placeholder {
      color: #cccccc;
    }
  }
  &__icon {
    margin-right: 8px;
    width: 24px;
    height: auto;
    color: #666666;
    vertical-align: middle;
  }
  &__button {
    margin: 32px auto 0;
    display: block;
  }
}
</style>
