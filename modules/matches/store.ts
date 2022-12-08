import { defineStore } from 'pinia'
import { eachDayOfInterval, endOfWeek, formatISO, getDate, startOfWeek } from 'date-fns'
// import ruLocale from 'date-fns/locale/ru'

export const useMatchesStore = defineStore('matches', () => {
  const currentDate = new Date()
  const listDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
  // const currentMonth = format(currentDate, 'MMMM', { locale: ruLocale })

  const activeDate = ref(formatISO(currentDate, { representation: 'date' }))

  const currentDay = computed(() => getDate(new Date(activeDate.value)))
  const arrayDateOfWeek = computed(() => eachDayOfInterval({ start: startOfWeek(currentDate, { weekStartsOn: 1 }), end: endOfWeek(currentDate, { weekStartsOn: 1 }) }))
  const arrayDaysOfWeek = computed(() => arrayDateOfWeek.value.map((d, i) => ({ number: getDate(d), name: listDays[i], date: formatISO(d, { representation: 'date' }) })))

  function setActiveDate(date: string) {
    activeDate.value = date
  }

  return { activeDate, arrayDaysOfWeek, setActiveDate, currentDay }
})

