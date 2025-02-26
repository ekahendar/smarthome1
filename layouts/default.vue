<template>
    <div class="tinggi min-h-screen">
        <AppHeader />
        <div class="flex">
            <AppSidebar />
            <slot />
        </div>
        <AppFooter />
    </div>
</template>
  

<style>
.tinggi{
    height: 100%;
}
</style>