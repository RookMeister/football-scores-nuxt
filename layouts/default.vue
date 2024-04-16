<template>
  <header class="w-full h-80px bg-white px-2 md:px-0">
    <div class="max-w-1280px mx-auto flex items-center h-full">
      <NuxtLink to="/">
        <img class="md:h-50px h-40px" src="~/assets/logo.png" alt="" srcset="">
      </NuxtLink>
    </div>
  </header>
  <main class="max-w-1280px mx-auto py-8">
    <slot />
  </main>
  <footer />
</template>
