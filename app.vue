<template>
  <div class="">
    <Header />
    <div class="flex">
      <Sidebar />
      <div>
        <NuxtLayout>
        <NuxtPage />
        </NuxtLayout>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  
};
</script>