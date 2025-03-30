<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav
    class="mx-auto my-12 bg-black text-white border-1 border-white/40 rounded-full max-w-3xl p-2 flex gap-4 justify-between items-center shadow-[0_0_100px_40px_rgba(107,255,243,0.5)]"
  >
    <RouterLink class="flex gap-2 items-center" to="/">
      <img src="@/assets/marc.jpeg" alt="Imagen Marc Rodriguez" class="w-10 h-10 rounded-full" />
      <span class="font-bold">Marc Rodriguez</span>
    </RouterLink>
    <div class="flex gap-8">
      <RouterLink class="text-white/80" to="/about">Experiencia</RouterLink>
      <RouterLink class="text-white/80" to="/about">Proyectos</RouterLink>
      <RouterLink class="text-white/80" to="/about">Habilidades</RouterLink>
    </div>
    <button class="border-1 border-white/40 rounded-[500px] p-1 min-w-24">CV</button>
  </nav>
</template>
