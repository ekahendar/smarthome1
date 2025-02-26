<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Dashboard</h2>
    <p class="text-gray-700">Selamat datang di Admin Dashboard.</p>
    <nuxt-link to="/admin/users" class="text-blue-500 hover:underline">
      Go to Users Dashboard
    </nuxt-link>
    <br>
    <nuxt-link to="/" class="text-blue-500 hover:underline">
      Go to Root
    </nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'admin', // Gunakan layout admin
};
</script>