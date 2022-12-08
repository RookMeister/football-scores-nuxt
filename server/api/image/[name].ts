import { IMAGE_BASE_URL } from '~/constants/images'

export default defineEventHandler(async (event) => {
  return IMAGE_BASE_URL + event.context.params.name
})
