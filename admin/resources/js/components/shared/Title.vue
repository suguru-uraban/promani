<template>
  <div class="title">
    <h2 class="title__inner">{{value}}</h2>
  </div>
</template>

<script lang="ts">
// library
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Title extends Vue {
  @Prop({ default: '' })
  value!: string;
}
</script>

<style lang="scss" scoped>
@import 'resources/sass/variables';

.title {
  margin-bottom: 8px;
  padding: 0 8px 4px;
  border-bottom: $color-admin-border solid 1px;
  &__inner {
    margin: 0;
    font-size: 2rem;
    color: $color-font-white;
    font-weight: bold;
  }
}
</style>
