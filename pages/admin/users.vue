<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Users</h2>
    <p class="text-gray-700">Manajemen pengguna.</p>
    <nuxt-link to="/admin" class="text-blue-500 hover:underline">
      Go to Admin Dashboard
    </nuxt-link>
    <input 
      type="text" 
      v-model="message" 
      placeholder="Type something..."
      class="input-field"
    >

    <p class="display-text">
      Your input: <span v-text="message"></span>
    </p>

    <p class="display-text">
      Your input (interpolation): {{ message }}
    </p>
    
    <img src="/images/grid-image/image-01.png" style="width:200px;height:200px;">
  </div>
</template>

<script>
export default {
  layout: 'admin', // Gunakan layout admin
  data() {
    return {
      message: ''
    }
  }
};
</script>
