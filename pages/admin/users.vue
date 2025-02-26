<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Users</h2>
    <p class="text-gray-700">Manajemen pengguna.</p>
    <nuxt-link to="/admin" class="text-blue-500 hover:underline">
        Go to Admin Dashboard
      </nuxt-link>
    <img src="/images/grid-image/image-01.png" alt="">
  </div>
</template>

<script>
export default {
  layout: 'admin', // Gunakan layout admin
};
</script>