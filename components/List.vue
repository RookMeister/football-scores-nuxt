<script setup lang="ts">
import type { ILeague } from '~/interfaces/leagues'

interface IProps {
  leagues: ILeague[]
}
defineProps<IProps>()
</script>

<template>
  <div class="list py-8px">
    <div class="px-16px py-8px">
      Популярные лиги
    </div>
    <a v-for="l in leagues" :key="l.id" :href="l.pageUrl" class="px-16px py-8px flex items-center hover:bg-gray-200 transition duration-200">
      <img :src="`/logo/leaguelogo/${l.id}.png`" class="mr-2 h-24px w-24px " width="16" height="16" loading="lazy">
      <span>{{ l.name }}</span>
    </a>
  </div>
</template>

<style lang="less">
.list {
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 1.0);
  border: solid 1px rgba(240, 240, 240, 1.0);
}
</style>
