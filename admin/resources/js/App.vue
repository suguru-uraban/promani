<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<script lang="ts">
// library
import { Component, Watch, Vue } from 'vue-property-decorator';

// store module
import ErrorModule from './store/error';

// util
import { INTERNAL_SERVER_ERROR } from './util/status';

@Component
export default class App extends Vue {
  get errorCode() {
    return ErrorModule.code;
  }

  @Watch('errorCode', { immediate: true })
  handler(val: number) {
    if (val === INTERNAL_SERVER_ERROR) {
      this.$router.push('/500');
      ErrorModule.SET_ERROR(null);
    }
  }
}
</script>
