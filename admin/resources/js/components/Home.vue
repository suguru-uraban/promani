<template>
  <Layout>
    <div class="home">
      <main class="home__body"></main>
    </div>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Layout from './layouts/Layout.vue';

@Component({
  components: {
    Layout,
  },
})
export default class Login extends Vue {}
</script>

<style lang="scss" scoped>
@import 'resources/sass/variables';

.home {
  &__body {
    width: 100%;
  }
}
</style>
