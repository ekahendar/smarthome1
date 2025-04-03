<template>
    <div class="h-screen">
        <AppHeader class="h-1/10"  />
        <div class="flex h-4/5">
            <AppSidebar class="w-1/5" />
            <slot class="w-4/5" />
        </div>
        <AppFooter class="h-1/10" />
    </div>
</template>
  


