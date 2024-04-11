<script setup lang="ts">
import ListLeagues from '@/components/List.vue'
import Matches from '@/components/Matches.vue'

const { data: leagues } = await useFetch(() => `/api/allLeagues/`, { method: 'GET' })
const { data: matches } = await useFetch(() => `/api/matches/20240410`, { method: 'GET' })
</script>

<template>
  <div class="grid grid-cols-4 gap-8">
    <div><ListLeagues v-if="leagues?.popular" :leagues="leagues.popular" /></div>
    <div v-if="matches" class="col-span-2 grid grid-cols-1 gap-4">
			<Matches v-for="item in matches.leagues" :item="item" />
    </div>
    <div></div>
  </div>
</template>

<style lang="less">

</style>
