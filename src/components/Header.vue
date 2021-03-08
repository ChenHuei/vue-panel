<template>
  <header
    class="header relative w-screen h-20 flex justify-center items-center bg-white transition-transform"
    :class="collapseClass"
  >
    <Item
      v-for="item in list"
      :key="item.event"
      :isDisabledSave="isDisabledSave"
      :isDisabledUndo="isDisabledUndo"
      :isDisabledRedo="isDisabledRedo"
      v-bind="item"
      v-on="$listeners"
    />
    <!-- arrow -->
    <div
      class="header-collapse absolute left-1/2 top-full w-12 h-12 flex justify-center items-center bg-white rounded-full transition cursor-pointer"
      @click="collapseHandler"
    >
      <i
        class="header-collapse-icon fas fa-chevron-up transition-transform"
        :class="collapseClass"
      ></i>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

// components
import Item from "./header/Item.vue";

// constants
import { HEADER_LIST } from "@/constants/header";

@Component({
  components: { Item },
  data() {
    return {
      list: HEADER_LIST,
    };
  },
})
export default class Header extends Vue {
  @Prop()
  isDisabledSave!: boolean;

  @Prop()
  isDisabledUndo!: boolean;

  @Prop()
  isDisabledRedo!: boolean;

  isCollapse = false;

  get collapseClass(): { [key: string]: boolean } {
    return {
      collapse: this.isCollapse,
    };
  }

  collapseHandler(): void {
    this.isCollapse = !this.isCollapse;
  }
}
</script>

<style lang="scss" scoped>
.header {
  &.collapse {
    transform: translateY(-100%);
  }

  &-collapse {
    transform: translate(-50%, -50%);

    &-icon {
      margin-top: 50%;
      transform: translateY(-50%);

      &.collapse {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
