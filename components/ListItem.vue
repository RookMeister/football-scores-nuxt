<script setup lang="ts">
const props = defineProps<{ item: { icon?: string; title?: string; to?: boolean } }>()
</script>

<template>
  <button v-if="item">
    <!-- <Icon v-if="item.icon" :name="item.icon" /> -->
    <div>
      {{ item.title }}
      <slot />
      <!-- <Icon v-if="item.to" name="chevron-forward-outline" /> -->
      <slot name="right" />
    </div>
  </button>
</template>

<style lang="less">
  button {
    height: 44px;
    width: 100%;
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    padding: 0 16px 0 16px;
    font-size: 17px;
    line-height: 22px;
    color: inherit;
    svg {
      height: 30px;
      color: var(--system-blue);
      & + div {
        margin-left: 20px;
      }
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      svg {
        color: var(--system-gray-2);
        height: 20px;
      }
    }
    &:not(:last-child) > div {
      padding-top: 10px;
      padding-bottom: 10px;
      text-align: left;
      width: 100%;
    }
  }
</style>
