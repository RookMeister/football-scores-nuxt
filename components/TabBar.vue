<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{ border?: boolean }>();
const tabs = ref(null);
// const eventClick = (e: MouseEvent) => {
//   const index = e.path.findIndex(e => e.id === 'tabs');
//   if (tabs.value) {
//     for (let i = 0; i < tabs.value.children.length; i++) {
//       tabs.value.children[i].classList.remove('active');
//     }
//   }
  
//   const el: HTMLElement = e.path[index - 1];
//   el.classList.add('active');
// }
</script>

<template>
  <div id="tabs" ref="tabs" class="tab-bar" :class="props.border && 'border'">
    <slot />
  </div>
</template>

<style lang="less">
.tab-bar {
  --padding-top: 0;
  --padding-end: 2px;
  --padding-bottom: 0;
  --padding-start: 2px;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background-color: var(--tab-bar-background);
  backdrop-filter: blur(30px);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: 16px;
  padding-right: 16px;
  min-height: 50px;
  &.border {
    border-top: 1px solid rgba(0, 0, 0, .2);
  }
  & > * {
    padding-left: var(--padding-start);
    padding-right: var(--padding-end);
    padding-top: var(--padding-top);
    padding-bottom: var(--padding-bottom);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height: 50px;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: var(--tab-bar-color);
    &.active {
      color: var(--tab-bar-color-active);
    }
    & > svg {
      height: 30px;
      fill: currentColor;
      margin: 2px 0;
    }
  }
}
</style>