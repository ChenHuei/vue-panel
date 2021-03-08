<template>
  <div
    class="header-item flex items-center mr-8 transition-opacity cursor-pointer hover:opacity-40"
    :class="{ disabled: disabledKey ? this[disabledKey] : false }"
    @click="$emit(event)"
  >
    <i class="fas mr-2" :class="[`fa-${icon}`, size]"></i>
    <p class="uppercase">{{ label }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class HeaderItem extends Vue {
  @Prop()
  label!: string;

  @Prop()
  icon!: string;

  @Prop()
  size!: string;

  @Prop()
  event!: string;

  @Prop()
  disabledKey!: string;

  @Prop()
  isDisabledSave!: boolean;

  @Prop()
  isDisabledUndo!: boolean;

  @Prop()
  isDisabledRedo!: boolean;
}
</script>

<style lang="scss" scoped>
.header-item {
  &.disabled {
    opacity: 0.4;
    cursor: not-allowed !important;

    &:hover {
      opacity: 0.4;
    }
  }
}
</style>
