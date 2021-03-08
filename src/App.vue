<template>
  <main id="app" class="w-screen h-screen bg-gray-200">
    <Header
      @save="saveHandler"
      @clear="clearHandler"
      @undo="undoHandler"
      @redo="redoHandler"
    />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// components
import Header from "@/components/Header.vue";

@Component({
  components: { Header },
})
export default class App extends Vue {
  saveHandler(): void {
    console.log("saveHandler");
  }

  clearHandler(): void {
    console.log("clearHandler");
  }

  undoHandler(): void {
    console.log("undoHandler");
  }

  redoHandler(): void {
    console.log("redoHandler");
  }
}
</script>
