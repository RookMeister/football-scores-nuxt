import { API_URL } from '~/constants/api'
import type { IMatchesResponseBody } from '~/interfaces/matches'

export default defineEventHandler(async (event) => {
  const url = `${API_URL}/matches`
  const params = {
    locale: event.context.params?.date,
    timezone: 'Europe/Moscow',
    ccode3: 'RUS'
  }
  const data = await $fetch<IMatchesResponseBody>(url, { method: 'GET', params })
  return data
})
