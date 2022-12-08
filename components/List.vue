<script setup lang="ts">
</script>
<template>
  <div class="list">
    <slot />
  </div>
</template>
<style lang="less">
  .list {
    background-color: var(--background-list, --background);
    border-radius: 14px;
    margin-bottom: 24px;
      & > *:not(:last-child) > div {
        border-bottom: 1px solid rgba(0, 0, 0, .2);
      }
  }
</style>