<script setup lang="ts">
import ListLeagues from '@/components/List.vue'
import Matches from '@/components/Matches.vue'
// import { useMatchesStore } from '@/modules/matches/store'

// definePageMeta({
//   layout: 'matches',
// })
// const store = useMatchesStore()

const { pending, error, data: leagues } = await useFetch(() => `/api/allLeagues/`, { method: 'GET' })
const { data: matches } = await useFetch(() => `/api/matches/20240410`, { method: 'GET' })

// const mapLeagues = computed(() => {
// 	if (!leagues.value) return {}
// 	const leaguesCountries = leagues.value.countries.map(l => l.leagues.flat())
// 	const leaguesInternal = leagues.value.international.map(l => l.leagues.flat())
// 	return Object.fromEntries([...leaguesCountries, ...leaguesInternal].flat().map(l => ([l.id, l])))
// 	// return [...leaguesCountries, ...leaguesInternal].flat()
// 	// leagues.value ?Object.fromEntries(leagues.value.countries.map(l => ([l.id, l]))) : {}
// })
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
