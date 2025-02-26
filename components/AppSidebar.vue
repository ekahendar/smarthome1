<template>
  <div class="w-64 bg-blue-800 text-white p-6">
    <h2 class="text-2xl font-bold mb-6">Admin Panel</h2>
    <ul class="space-y-2">
      <li>
        <nuxt-link to="/admin" class="block p-2 hover:bg-blue-700 rounded">
          Dashboard
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/admin/users" class="block p-2 hover:bg-blue-700 rounded">
          Users
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/admin/settings" class="block p-2 hover:bg-blue-700 rounded">
          Settings
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>