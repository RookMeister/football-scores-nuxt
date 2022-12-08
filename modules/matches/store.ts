import { defineStore } from 'pinia'
import { eachDayOfInterval, endOfWeek, formatISO, getDate, startOfWeek } from 'date-fns'

export const useMatchesStore = defineStore('matches', () => {
  const currentDate = new Date()
  const listDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
  const currentMonth = currentDate.toLocaleDateString('ru-RU', { month: 'long' })

  const activeDate = ref(formatISO(currentDate, { representation: 'date' }))

  const currentDay = computed(() => getDate(new Date(activeDate.value)))
  const arrayDateOfWeek = computed(() => eachDayOfInterval({ start: startOfWeek(currentDate, { weekStartsOn: 1 }), end: endOfWeek(currentDate, { weekStartsOn: 1 }) }))
  const arrayDaysOfWeek = computed(() => arrayDateOfWeek.value.map((d, i) => ({ number: getDate(d), name: listDays[i], date: formatISO(d, { representation: 'date' }) })))

  function setActiveDate(date: string) {
    activeDate.value = date
  }

  return { currentMonth, activeDate, arrayDaysOfWeek, setActiveDate, currentDay }
})

