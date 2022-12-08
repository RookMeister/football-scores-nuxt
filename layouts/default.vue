<script setup lang="ts">
import FooterVue from '~~/components/Footer.vue'
</script>

<template>
  <header style="background-color: #ffffff;">
    <van-nav-bar :border="false">
      <template #title>
        <div style="text-align: center">
          <img src="~/assets/logo.png" style="height: 46px;padding: 8px;" alt="" srcset="">
        </div>
      </template>
    </van-nav-bar>
  </header>
  <slot />
  <FooterVue />
</template>
