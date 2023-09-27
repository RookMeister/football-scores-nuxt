import { defineStore } from 'pinia'
import { eachDayOfInterval, endOfMonth, endOfWeek, formatISO, getDate, setDay, startOfMonth, startOfWeek } from 'date-fns'

export const useMatchesStore = defineStore('matches', () => {
  const period = ref([0])

  const currentDate = new Date()
  // const currentDate1 = setDay(currentDate, -7, { weekStartsOn: 1 })
  // const currentDate1 = setDay(currentDate, -14, { weekStartsOn: 1 })
  // const currentDate1 = setDay(currentDate, -28, { weekStartsOn: 1 })
  // const currentDate2 = setDay(currentDate, 7, { weekStartsOn: 1 })
  // const currentDate2 = setDay(currentDate, 14, { weekStartsOn: 1 })
  // const currentDate2 = setDay(currentDate, 28, { weekStartsOn: 1 })
  // const currentDate1 = setDay(currentDate, -7, { weekStartsOn: 1 })

  // const listDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
  // const period = [-21, -14, -7, 0, 7, 14, 21]
  const currentMonth = currentDate.toLocaleDateString('ru-RU', { month: 'long' })

  const activeDate = ref(formatISO(currentDate, { representation: 'date' }))

  const currentDay = computed(() => getDate(new Date(activeDate.value)))
  const arrayDatesOfWeek = computed(() => {
    // const period = process.client ? [-21, -14, -7, 0, 7, 14, 21] : [0]
    return period.value.map((val) => {
      const date = setDay(currentDate, val, { weekStartsOn: 1 })
      return eachDayOfInterval({ start: startOfWeek(date, { weekStartsOn: 1 }), end: endOfWeek(date, { weekStartsOn: 1 }) })
    })
  })
  // [
  //   eachDayOfInterval({ start: startOfWeek(currentDate1, { weekStartsOn: 1 }), end: endOfWeek(currentDate1, { weekStartsOn: 1 }) }),
  //   eachDayOfInterval({ start: startOfWeek(currentDate, { weekStartsOn: 1 }), end: endOfWeek(currentDate, { weekStartsOn: 1 }) }),
  //   eachDayOfInterval({ start: startOfWeek(currentDate2, { weekStartsOn: 1 }), end: endOfWeek(currentDate2, { weekStartsOn: 1 }) }),
  // ]
  // const arrayDateOfWeek = computed(() => eachDayOfInterval({ start: startOfWeek(currentDate, { weekStartsOn: 1 }), end: endOfWeek(currentDate, { weekStartsOn: 1 }) }))
  // const arrayDateOfMonth = computed(() => eachDayOfInterval({ start: startOfMonth(currentDate), end: endOfMonth(currentDate) }))
  // const arrayDaysOfWeek = computed(() => arrayDateOfWeek.value.map(d => ({
  //   number: getDate(d),
  //   name: new Date(d).toLocaleDateString('ru-RU', { weekday: 'short' }),
  //   date: formatISO(d, { representation: 'date' }),
  // })))
  const arrayDaysOfWeek = computed(() => arrayDatesOfWeek.value.map(el =>
    el.map(d => ({
      number: getDate(d),
      name: new Date(d).toLocaleDateString('ru-RU', { weekday: 'short' }),
      date: formatISO(d, { representation: 'date' }),
    }),
    )))
  // const arrayDaysOfWeek = computed(() => arrayDateOfWeek.value.map((d, i) => ({ number: getDate(d), name: listDays[i], date: formatISO(d, { representation: 'date' }) })))
  // const arrayDaysOfMonth = computed(() => {
  //   const arrayDays: { number: number; name: string; date: string }[][] = []
  //   const result = (i: number) => setDay(currentDate, i - 7, { weekStartsOn: 1 })
  //   const h = arrayDateOfWeek.value.map(d => ({
  //     number: getDate(d),
  //     name: new Date(d).toLocaleDateString('ru-RU', { weekday: 'short' }),
  //     date: formatISO(d, { representation: 'date' }),
  //   }))
  //   console.log(h.length)

  //   for (let i = 0; i < h.length; i += 7)
  //     arrayDays.push(h.slice(i, i + 7))

  //   // for (let index = 0; index < 8; index++) {
  //   //   const ratio = 4 - index
  //   //   const element = arrayDateOfWeek.value.map((d, i) => ({ number: getDate(d), name: listDays[i], date: formatISO(d, { representation: 'date' }) }))
  //   //   arrayDays.push(element)
  //   // }

  //   return arrayDays
  // })

  function setActiveDate(date: string) {
    activeDate.value = date
  }

  function setPeriod(isClient: boolean) {
    console.log(888, isClient)
    period.value = isClient ? [-21, -14, -7, 0, 7, 14, 21] : [0]
  }

  return { currentMonth, activeDate, arrayDaysOfWeek, setActiveDate, setPeriod, currentDay, arrayDatesOfWeek }
})

