<script setup lang="ts">
const active = ref(0)

const tabs = ref([
  { name: 'Матчи' },
  { name: 'Соревнования' },
])
</script>

<template>
  <van-tabbar v-model="active">
    <van-tabbar-item v-for="tab in tabs" :key="tab.name" icon="home-o">
      {{ tab.name }}
    </van-tabbar-item>
  </van-tabbar>
</template>
