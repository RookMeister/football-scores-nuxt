<script setup lang="ts">
import { showToast } from 'vant'
import MatchItem from '../modules/matches/components/MatchItem.vue'
import { useMatchesStore } from '@/modules/matches/store'

definePageMeta({
  layout: 'matches',
})
const store = useMatchesStore()

const activeDate = computed(() => store.activeDate)
const { pending, error, data } = await useFetch(() => `/api/matches/${activeDate.value}/`, { method: 'GET' })

const isLoading = ref(false)
const onRefresh = () => setTimeout(async () => {
  await refreshNuxtData()
  isLoading.value = false
  showToast('SUCCES')
}, 1000)
</script>

<template>
  <van-pull-refresh v-model="isLoading" class="py-8px h-full" @refresh="onRefresh">
    <div class="fs-grid-row-8">
      <template v-if="data">
        <div v-for="season in data.competitions" :key="season.id" class="fs-block-competitions">
          <div style="display: flex;align-items: center;background-color: #eee;border-radius: 8px;min-height: 32px;padding-inline: 4px;">
            <!-- <Icon name="star-outline" style="height: 24px;width: 24px;padding: 4px;" /> -->
            <img v-if="season.competition.frontConfig.logos.default" style="width: 24px;height: 24px;margin-right: 8px;" :src="`/m/${season.competition.frontConfig.logos.default}`">
            {{ season.titleRu }}
            <Icon name="chevron-forward-outline" style="height: 24px;width: 24px;margin-left: auto;padding: 4px;" />
          </div>
          <div class="fs-grid-row-4 fs-mt-8">
            <template v-for="match in data.items">
              <MatchItem v-if="(match.seasonId === season.id) && (match.eventStatus.id !== 'postponed')" :key="match.id" style="padding-block: 2px" :match="match" :participants="{ home: data.participants[match.competitors[0].participantId], away: data.participants[match.competitors[1].participantId] }" />
            </template>
          </div>
        </div>
      </template>
    </div>
  </van-pull-refresh>
</template>

<style lang="less">
main {
  height: calc(100% - 167px);
  background-color: #eee;
  overflow: auto;
}

@supports (padding-bottom: env(safe-area-inset-bottom)) {
  main {
    --safe-area-inset-bottom: env(safe-area-inset-bottom);
    padding-bottom: calc(env(safe-area-inset-bottom) + 50px);
  }
}

.fs-block-competitions {
  border-radius: 8px;
  padding: 12px;
  background-color: #FFFFFF;
}
</style>
