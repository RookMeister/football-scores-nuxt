<script setup lang="ts">
import { format } from 'date-fns';
import ListLeagues from '@/components/List.vue';
import Matches from '@/components/Matches.vue';
import DatePicker from '~/components/DatePicker.vue';

const route = useRoute();
const date = computed(() => route.query.date ? format(new Date(route.query.date.toString()), 'yyyyMMdd') : format(new Date(), 'yyyyMMdd'));
const { data: allLeagues } = await useFetch(() => '/api/allLeagues/', { method: 'GET' });
const { data: matches, pending } = await useFetch(() => `/api/matches/${date.value}`, { method: 'GET' });
</script>

<template>
  <div class="grid md:grid-cols-4 gap-8 grid-cols-1">
    <div class="md:block hidden">
      <ListLeagues v-if="allLeagues?.popular" :leagues="allLeagues.popular" />
    </div>
    <div v-if="matches" class="col-span-2 grid grid-cols-1 gap-4 px-2 md:px-0">
      <DatePicker :loading="pending" />
      <Matches v-for="item in matches.leagues" :key="item.id" :data="item" />
    </div>
    <div class="md:block hidden" />
  </div>
</template>

<style lang="less">

</style>
