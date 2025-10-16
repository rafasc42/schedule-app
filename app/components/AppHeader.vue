<script setup>
  import {ref} from 'vue';
  const toggleMenu = ref(false);
</script>

<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex items-center justify-between">
      <a href="#" class="text-white text-xl font-bold">HabitTracker</a>

      <div class=" hidden md:flex space-x-6">
        <NuxtLink to="/" class="text-gray-300 hover:text-white transition">Dashboard</NuxtLink>
        <NuxtLink to="/about" class="text-gray-300 hover:text-white transition">Analytics</NuxtLink>
        <NuxtLink to="/about" class="text-gray-300 hover:text-white transition">Settings</NuxtLink>
      </div>

      <button class="md:hidden text-gray-300 hover:text-white focus:outline-none" aria-label="Toggle menu" @click="toggleMenu = !toggleMenu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 6h16M4 18h16"/>
        </svg>
      </button>
    </div>

    <div v-if="toggleMenu" class="md:hidden bg-gray-700 px-4 py-3 space-y-2">
      <a href="#" class="block text-white">Dashboard</a>
      <a href="#" class="block text-white">Analytics</a>
      <a href="#" class="block text-white">Settings</a>
    </div>
  </nav>
</template>
