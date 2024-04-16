<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="less">
.card {
	overflow: hidden;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 1.0);
  border: 1px solid  rgba(240, 240, 240, 1.0);
}
</style>
