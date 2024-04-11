import { API_URL } from '~/constants/api'
import type { AllLeguesResponseBody } from '~/interfaces/leagues'

export default defineEventHandler(async (event) => {
  const url = `${API_URL}/allLeagues`
  const body = {
    locale: 'ru',
    provider: null,
    country: 'RUS'
  }
  const data = await $fetch<AllLeguesResponseBody>(url, { method: 'POST', body })
  return data
})

