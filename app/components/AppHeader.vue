<script setup>
  import {ref} from 'vue';
  const toggleMenu = ref(false);
</script>

<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex items-center justify-between">
      <a href="#" class="text-white text-xl font-bold">Rafael Borges</a>

      <div class=" hidden md:flex space-x-6">
        <NuxtLink to="/dashboard" class="text-gray-300 hover:text-white transition">Agendamentos</NuxtLink>
        <NuxtLink to="/about" class="text-gray-300 hover:text-white transition">Médicos</NuxtLink>
        <NuxtLink to="/about" class="text-gray-300 hover:text-white transition">Clientes</NuxtLink>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="border: 3px solid black; border-radius: 60px">
            <circle cx="12" cy="7" r="4"/>
            <path d="M5.5 21a7 7 0 0 1 13 0"/>
          </svg>
      </div>

      <button class="md:hidden text-gray-300 hover:text-white focus:outline-none" aria-label="Toggle menu" @click="toggleMenu = !toggleMenu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 6h16M4 18h16"/>
        </svg>
      </button>
    </div>

    <div v-if="toggleMenu" class="md:hidden bg-gray-700 px-4 py-3 space-y-2">
      <a href="#" class="block text-white">Agendamentos</a>
      <a href="#" class="block text-white">Médicos</a>
      <a href="#" class="block text-white">Clientes</a>

    </div>
  </nav>
</template>
