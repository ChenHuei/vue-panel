<template>
  <div
    class="flex items-center mr-8 transition-opacity cursor-pointer hover:opacity-40"
    @click="$emit(event)"
  >
    <i class="fas mr-2" :class="[`fa-${icon}`, size]"></i>
    <p class="uppercase">{{ label }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class extends Vue {
  @Prop()
  label!: string;

  @Prop()
  icon!: string;

  @Prop()
  size!: string;

  @Prop()
  event!: string;
}
</script>
