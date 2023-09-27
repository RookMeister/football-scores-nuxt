<script setup>
useHead({
  htmlAttrs: {
    lang: 'ru',
  },
  charset: 'utf-8',
  title: 'Football Scores',
  // titleTemplate: title => title !== 'Nuxt Movies' ? `${title} · Nuxt Movies` : title,
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #fff;
}

html {
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
}

@supports (padding-top: constant(safe-area-inset-top)) {
  .html {
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  }
}
@media (display-mode: fullscreen) {
  body {
    padding: 0;
    margin: 0;
  }
}
@media (display-mode: standalone) {
  body {
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
    padding: 0;
    margin: 0;
  }
}

body {
  position: fixed;
  overflow: hidden;
  width: 100%;
}

@supports (padding-top: env(safe-area-inset-top)) {
  body {
    --safe-area-inset-top: env(safe-area-inset-top);
    height: calc(100% + var(--safe-area-inset-top));
  }
}

@media (display-mode: fullscreen) {
  body {
    height: 100%;
  }
}

@media (display-mode: standalone) {
  body {
    height: 100%;
  }
}
</style>
