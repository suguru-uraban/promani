<template>
  <Layout>
    <div class="sharesEdit">
      <main class="sharesEdit__body">
        <section class="sharesEdit__section">
          <Title value="共有事項編集" />
          <p class="sharesEdit__caption">共有事項は{{maxSharesLength}}文字以内で入力してください。</p>
          <ValidationObserver v-slot="{ handleSubmit }">
            <ValidationProvider
              name="共有事項"
              :rules="{ max:maxSharesLength }"
              :bails="false"
              v-slot="{ classes, errors }"
            >
              <div class="sharesEdit__form" :class="classes">
                <textarea class="sharesEdit__textarea" v-model="shares"></textarea>
                <span class="error-baloon">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <dl class="sharesEdit__countarea">
              <dt class="sharesEdit__counttitle">残り文字数：</dt>
              <dd
                class="sharesEdit__count--error"
                v-if="shares.length >= maxSharesLength"
              >{{countShares()}}文字</dd>
              <dd
                class="sharesEdit__count--warn"
                v-else-if="shares.length >= (maxSharesLength - 10)"
              >{{countShares()}}文字</dd>
              <dd class="sharesEdit__count" v-else>{{countShares()}}文字</dd>
            </dl>
            <div class="sharesEdit__button">
              <button class="medium ok sharesEdit__button" @click="handleSubmit(submitShares)">送信</button>
            </div>
          </ValidationObserver>
        </section>
      </main>
    </div>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Layout from './layouts/Layout.vue';
import Title from './shared/Title.vue';

@Component({
  components: {
    Layout,
    Title,
  },
})
export default class Login extends Vue {
  shares: string = '';
  maxSharesLength = 200;

  public countShares() {
    return this.maxSharesLength - this.shares.length;
  }

  public submitShares() {
    console.log(this.shares);
  }
}
</script>

<style lang="scss" scoped>
@import 'resources/sass/variables';

.sharesEdit {
  &__body {
    height: 600px;
    position: relative;
  }
  &__section {
    margin-bottom: 24px;
  }
  &__caption {
    margin-bottom: 16px;
    font-size: 1.4rem;
    color: $color-font-white;
    line-height: 1.4;
  }
  &__form {
    position: relative;
  }
  &__textarea {
    width: 100%;
    height: 90px;
    display: block;
  }
  &__countarea {
    margin-top: 8px;
    font-size: 1.4rem;
    line-height: 1.4;
    display: flex;
    justify-content: flex-end;
    > dd {
      margin: 0;
    }
  }
  &__counttitle {
    color: $color-font-white;
  }
  &__count {
    color: $color-font-white;
    &--warn {
      color: $color-font-jaunebrillant;
    }
    &--error {
      color: $color-font-signalred;
      font-weight: bold;
      text-shadow: $color-font-white 1px 1px 0, $color-font-white -1px -1px 0,
        $color-font-white -1px 1px 0, $color-font-white 1px -1px 0, $color-font-white 0px 1px 0,
        $color-font-white 0-1px 0, $color-font-white -1px 0 0, $color-font-white 1px 0 0;
    }
  }
  &__button {
    text-align: center;
  }
}
</style>
