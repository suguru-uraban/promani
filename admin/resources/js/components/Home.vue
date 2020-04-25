<template>
  <Layout>
    <div class="home">
      <main class="home__body">
        <section class="home__section">
          <Title value="共有事項" />
        </section>
        <section class="home__section">
          <Title value="リリースノート" />
        </section>
      </main>
    </div>
  </Layout>
</template>

<script lang="ts">
// library
import { Component, Vue } from 'vue-property-decorator';

// component
import Layout from './layouts/Layout.vue';
import Title from './shared/Title.vue';

@Component({
  components: {
    Layout,
    Title,
  },
})
export default class Login extends Vue {}
</script>

<style lang="scss" scoped>
@import 'resources/sass/variables';

.home {
  &__body {
    height: 600px;
    position: relative;
  }
  &__section {
    margin-bottom: 24px;
  }
}
</style>
