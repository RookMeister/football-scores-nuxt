<script setup lang="ts">
import { useMatchesStore } from '@/modules/matches/store'
import FooterVue from '~/components/Footer.vue'

const store = useMatchesStore()
const placeCalendar = ref(1)

onMounted(() => {
  setTimeout(() => (placeCalendar.value = 3), 0)
  store.setPeriod(true)
})
</script>

<template>
  <header style="background-color: #ffffff;">
    <!-- <van-nav-bar :border="false">
      <template #title>
        <div style="text-align: center">
          <img src="~/assets/logo.png" style="height: 46px;padding: 8px;" alt="" srcset="">
        </div>
      </template>
    </van-nav-bar> -->
    <div class="fs-grid-row-8 p-8px">
      <div style="display: flex;align-items: center;justify-content: space-between;text-transform: capitalize;">
        <Icon name="star-outline" style="height: 36px;width: 36px;padding: 4px;" />
        {{ store.currentMonth }}
        <Icon name="star-outline" style="height: 36px;width: 36px;padding: 4px;" />
      </div>
      {{ k }}
      <van-swipe :initial-swipe="placeCalendar" :loop="false" :show-indicators="false">
        <van-swipe-item v-for="(week, index) in store.arrayDaysOfWeek" :key="index">
          <div style="display: flex;align-items: center;justify-content: space-between;">
            <div v-for="day in week" :key="day.number" style="padding-inline: 4px;text-align: center;border-radius: 50%;" @click="store.setActiveDate(day.date)">
              <div style="font-size: 14px;margin-bottom: 4px;">
                {{ day.name }}
              </div>
              <div style="border-radius: 8px;padding: 4px 8px;" :style="{ 'background-color': (store.currentDay === day.number) ? '#eee' : '#fff' }">
                {{ day.number }}
              </div>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </header>
  <main>
    <slot />
  </main>
  <FooterVue />
</template>
