<template>
  <main id="app" class="w-screen h-screen relative bg-gray-200">
    <canvas
      class="absolute inset-0"
      ref="canvas"
      width="0"
      height="0"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp"
      @mousemove="onMouseMove"
      @mouseleave="onMouseLeave"
      @mouseenter="onMouseEnter"
    />
    <Header
      :isDisabeldUndo="isDisabeldUndo"
      :isDisabeldRedo="isDisabeldRedo"
      @save="saveHandler"
      @clear="clearHandler"
      @undo="undoHandler"
      @redo="redoHandler"
    />
    <Pointer v-bind="pointer" :is-hidden="isHiddenPointer" />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// components
import Header from "@/components/Header.vue";
import Pointer from "@/components/Pointer.vue";

@Component({
  components: { Header, Pointer },
})
export default class App extends Vue {
  isMouseDown = false;
  x = 0;
  y = 0;
  base64 = "";

  current = 0;
  history: string[] = [];

  isHiddenPointer = false;
  pointer: { x: number; y: number } = {
    x: 0,
    y: 0,
  };

  canvas: HTMLCanvasElement | null = null;
  context: CanvasRenderingContext2D | null = null;

  get isDisabeldUndo(): boolean {
    return this.current === 0;
  }

  get isDisabeldRedo(): boolean {
    return this.current === this.history.length;
  }

  mounted(): void {
    this.init();
  }

  // init

  init(): void {
    this.canvas = this.$refs.canvas as HTMLCanvasElement;

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.lineCap = "round";
    this.context.strokeStyle = "#000000";
    this.context.lineWidth = 16;
  }

  // handler
  saveHandler(): void {
    const link = document.createElement("a");
    link.href = this.base64;
    link.download = "file.png";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  clearHandler(): void {
    if (this.context && this.canvas) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.current = 0;
      this.history = [];
    }
  }

  undoHandler(): void {
    if (this.isDisabeldUndo) return;

    this.changeHistoryHandler(-1);
  }

  redoHandler(): void {
    if (this.isDisabeldRedo) return;

    this.changeHistoryHandler(1);
  }

  changeHistoryHandler(step: 1 | -1): void {
    if (this.context && this.canvas) {
      this.current += step;
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      if (this.current !== 0) {
        this.drawImageHandler(this.history[this.current - 1]);
      }
    }
  }

  drawCanvasHandler(x: number, y: number): void {
    if (this.context) {
      this.context.beginPath();
      this.context.moveTo(this.x, this.y);
      this.context.lineTo(x, y);
      this.context.stroke();

      this.x = x;
      this.y = y;
    }
  }

  drawImageHandler(src: string, x = 0, y = 0) {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      x = window.innerWidth / 2 - img.width / 2;
      y = window.innerHeight / 2 - img.height / 2;
      (this.context as CanvasRenderingContext2D).drawImage(img, x, y);
      this.base64 = (this.canvas as HTMLCanvasElement).toDataURL();
    };
  }

  // listener

  onMouseDown(event: MouseEvent): void {
    const { clientX, clientY } = event;

    this.isMouseDown = true;
    this.x = clientX;
    this.y = clientY;
  }

  onMouseUp(): void {
    this.isMouseDown = false;

    this.base64 = (this.canvas as HTMLCanvasElement).toDataURL();
    this.history.push(this.base64);
    this.current = this.history.length;
  }

  onMouseMove(event: MouseEvent): void {
    const { clientX, clientY } = event;

    this.$set(this.pointer, "x", clientX);
    this.$set(this.pointer, "y", clientY);

    if (this.isMouseDown) {
      this.drawCanvasHandler(clientX, clientY);
    }
  }

  onMouseLeave(): void {
    this.isMouseDown = false;
    this.isHiddenPointer = true;
  }

  onMouseEnter(): void {
    this.isHiddenPointer = false;
  }
}
</script>
