<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = withDefaults(defineProps<{ name: string; size?: number }>(), { size: 1 })
const AsyncIcon = defineAsyncComponent(() => import(`~/assets/${props.name}.svg`))
</script>

<template>
  <AsyncIcon v-bind="$attrs" class="icon" :class="[`size-${props.size}`]" />
</template>

<style lang="less">
  svg.icon {
    display: block;
  }
</style>
