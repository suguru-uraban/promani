<template>
  <div class="layout">
    <Header />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './Header.vue';

@Component({
  components: {
    Header,
  },
})
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>
@import 'resources/sass/variables';

.layout {
  padding: 64px 0 0 80px;
  min-width: 1000px;
  position: relative;
  &__body {
    width: 100%;
  }
}
</style>
