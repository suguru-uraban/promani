<template>
  <div>
    <main>
      <div class="container">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { INTERNAL_SERVER_ERROR } from "./util/status";
import { Component, Watch, Vue } from "vue-property-decorator";
import ErrorModule from "./store/error";
console.log(ErrorModule.code);
@Component
export default class App extends Vue {
  get errorCode() {
    return ErrorModule.code;
  }

  @Watch("errorCode", { immediate: true })
  handler(val: number) {
    if (val === INTERNAL_SERVER_ERROR) {
      this.$router.push("/500");
      ErrorModule.SET_ERROR(null);
    }
  }
}
</script>