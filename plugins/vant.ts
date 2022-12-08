import * as vant from 'vant'
import '@vant/touch-emulator'
import ruRu from 'vant/es/locale/lang/ru-RU'
import { defineNuxtPlugin } from '#app'

import 'vant/lib/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  vant.Locale.use('ru-RUS', ruRu)

  nuxtApp.vueApp
    .use(vant.NavBar)
    .use(vant.Button)
    .use(vant.Tabbar)
    .use(vant.TabbarItem)
    .use(vant.Tabs)
    .use(vant.Tab)
    .use(vant.PullRefresh)
    .use(vant.Dialog)
    .use(vant.Loading)
    .use(vant.Notify)
})
