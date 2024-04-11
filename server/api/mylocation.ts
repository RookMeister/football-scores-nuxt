import { API_URL } from '~/constants/api'

export default defineEventHandler(async (event) => {
  const url = `${API_URL}/mylocation`
  const data = await $fetch<{"countryCode": "RU"
	,
  "ccode3": "RUS",
  "timezone": "Europe/Moscow",
  "ip": "185.97.201.95",
  "regionId": "SPE",

  "regionName": "St.-Petersburg"}>(url, { method: 'GET' })
  return data
})

