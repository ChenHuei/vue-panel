<template>
  <div
    ref="pointer"
    class="pointer absolute rounded-full bg-black transition pointer-events-none"
    :class="{ hidden: isHidden }"
    :style="styleHandler"
  ></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Pointer extends Vue {
  @Prop()
  x!: number;

  @Prop()
  y!: number;

  @Prop()
  isHidden!: boolean;

  clientWidth = 0;
  clientHeight = 0;

  get styleHandler(): { [key: string]: string } {
    return {
      left: `${this.x - this.clientWidth / 2}px`,
      top: `${this.y - this.clientHeight / 2}px`,
    };
  }

  mounted(): void {
    const pointer = this.$refs.pointer as Element;

    this.clientWidth = pointer.clientWidth;
    this.clientHeight = pointer.clientHeight;
  }
}
</script>

<style lang="scss" scoped>
.pointer {
  width: 16px;
  height: 16px;
}
</style>
