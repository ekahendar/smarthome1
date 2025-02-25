<template>
  <div class="min-h-screen flex">
    <!-- Sidebar -->
    <Sidebar />

    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <Header />

      <!-- Konten Utama -->
      <div class="flex-1 p-6 bg-gray-100">
        <slot /> <!-- Halaman akan dirender di sini -->
      </div>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Sidebar,
    Header,
    Footer,
  },
};
</script>