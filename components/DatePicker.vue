<script setup lang="ts">
import { format, isToday, isTomorrow, isYesterday, addDays } from 'date-fns';
import { ru } from 'date-fns/locale';
import { ChevronRight, ChevronLeft } from 'lucide-vue-next';
import Card from '@/components/Card.vue';

const route = useRoute();

const date = ref(new Date());
const props = defineProps<{ loading: boolean }>();

if (route.query.date) {
  const dateStr = route.query.date.toString();
  date.value = new Date(dateStr);
}

const router = useRouter();

const dateString = computed(() => {
  if (isToday(date.value)) {
    return 'Сегодня';
  } else if (isTomorrow(date.value)) {
    return 'Завтра';
  } else if (isYesterday(date.value)) {
    return 'Вчера';
  } else {
    return format(date.value, 'EEEE, d MMMM', { locale: ru });
  }
});

const changeDate = (type: number) => {
  if (props.loading) { return; }
  date.value = addDays(date.value, type);
  router.push({ query: { date: format(date.value, 'yyyy-MM-dd') } });
};

</script>

<template>
  <Card class="flex items-center justify-between p-4">
    <Button variant="ghost" size="icon" :disabled="loading" @click="changeDate(-1)">
      <ChevronLeft />
    </Button>

    <div class="capitalize">
      {{ dateString }}
    </div>
    <Button variant="ghost" size="icon" :disabled="loading" @click="changeDate(1)">
      <ChevronRight />
    </Button>
  </Card>
</template>

<style lang="less">

</style>
