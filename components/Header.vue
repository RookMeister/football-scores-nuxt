<script setup lang="ts">
import { computed, ref } from 'vue'
// import Icon from './Icon.vue';
import Spinner from './spinner/index.vue'

const props = defineProps<{ title?: string; titleLarge?: string; refresh?: boolean; static?: boolean }>()

const opacity = ref(props.static ? 1 : 0)
const loading = ref(0)
// const transform= ref('rotate(0deg)');
// const height = ref('100px');
const top = ref('-32px')
// const position = ref<'absolute' | 'relative'>('absolute');
let ticking = false

// const transform = computed(() => `rotate(${360 * loading.value / 2}deg)`);

function changeScroll() {
  if (window.scrollY < 0 && loading.value < 2) {
    loading.value = -window.scrollY / 50
  }
  else if (loading.value >= 1) {
    top.value = '0px'
    setTimeout(() => {
      top.value = '-32px'
      loading.value = 0
    }, 2000)
  }

  if (!props.static) {
    if (window.scrollY < 47)
      opacity.value = window.scrollY / 44

    else
      opacity.value = 1
  }
}

window.addEventListener('scroll', (e: Event) => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      changeScroll()
      ticking = false
    })

    ticking = true
  }
})
</script>

<template>
  <div class="toolbar">
    <div class="toolbar-background" :style="{ opacity }" />
    <div class="toolbar-container">
      <slot name="start" />
      <slot name="secondary" />
      <div class="toolbar-content" :style="{ opacity: (opacity >= 1) ? 1 : 0 }">
        {{ title }}
      </div>
      <slot name="primary" />
      <slot name="end" />
    </div>
  </div>
  <div v-if="props.refresh" class="refresh" :style="{ opacity: loading, marginTop: top }">
    <Spinner name="lines" />
  </div>
  <div class="title largetitle-text">
    {{ titleLarge }}
  </div>
</template>

<style lang="less">
.refresh {
  display: flex;
  justify-content: center;
  width: 100%;
  transition: margin .5s;
  margin-top: -32px;
}
.toolbar {
  --padding-top: 3px;
  --padding-bottom: 3px;
  --padding-start: 4px;
  --padding-end: 4px;
  --min-height: 44px;
  width: 100%;
  padding-top: env(safe-area-inset-top);
  position: sticky;
  top: 0;
  z-index: 1;
  .toolbar-background {
    position: absolute;
    transform: translateZ(0);
    background-color: var(--toolbar-background);
    backdrop-filter: blur(30px);
    pointer-events: none;
    contain: strict;
    z-index: -1;
    inset: 0px;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
  }
  .toolbar-container {
    min-height: var(--min-height);
    padding-left: var(--padding-start);
    padding-right: var(--padding-end);
    padding-top: var(--padding-top);
    padding-bottom: var(--padding-bottom);
    display: flex;
    justify-content: space-around;

    .toolbar-content {
      font-size: 17px;
      text-align: center;
      font-weight: 600;
      padding-left: 90px;
      padding-right: 90px;
      display: flex;
      align-items: center;
    }
  }
}
.title {
  position: sticky;
  top: 0;
  margin: 10px 0;
  padding: 7px 16px 6px 16px;
  transform-origin: left center;
  bottom: 0px;
  align-items: flex-end;
  font-weight: 700;
  text-align: start;
}
</style>
