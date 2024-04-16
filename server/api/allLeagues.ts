import { API_URL } from '~/constants/api';
import type { AllLeguesResponseBody } from '~/interfaces/leagues';

// const mapObj = <Item>(arr: Item[], key: keyof Item): Record<string | number, Item> => Object.fromEntries(arr.map(item => [item[key], item]));

export default defineEventHandler(async (_event) => {
  const url = `${API_URL}/allLeagues`;
  const body = { locale: 'ru', provider: null, country: 'RUS' };
  const { popular, international, countries } = await $fetch<AllLeguesResponseBody>(url, { method: 'POST', body });

  const data = {
    international,
    countries,
    popular
  };
  return data;
});
