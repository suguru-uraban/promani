<template>
  <div class="error">
    <img src="../../../images/logo_admin.svg" width="100" alt="プロまに" class="error__logo" />
    <div class="error__code">500</div>
    <h1 class="error__title">INTERNAL SERVER ERROR</h1>
    <p class="error__message">
      システムエラーが発生しました。
      <br />後ほどアクセスするか、システム管理者にお問い合わせください。
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import 'resources/sass/variables';

.error {
  margin: auto;
  width: 600px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  &__logo {
    margin: 0 auto 24px;
    display: block;
  }
  &__code {
    margin: 0;
    font-size: 6.4rem;
    color: $color-font-gray;
    font-weight: bold;
    text-align: center;
  }
  &__title {
    margin: 0;
    font-size: 2.4rem;
    color: $color-font-gray;
    font-weight: bold;
    text-align: center;
  }
  &__message {
    font-size: 1.6rem;
    color: $color-font-base;
    line-height: 1.8;
    text-align: center;
  }
}
</style>
