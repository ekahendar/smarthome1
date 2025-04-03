<template>
  <div class="flex-wrap">
    <nuxt-link to="/" class="text-blue-500 hover:underline">
        Go to Home Dashboard
    </nuxt-link>
    <input v-model="newTodo" placeholder="Tambah todo baru" />
    <button @click="addTodo">Tambah</button>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input v-model="todo.text" @blur="updateTodo(todo)" />
        <button @click="deleteTodo(todo.id)">Hapus</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const todos = ref([]);
const newTodo = ref('');

async function fetchTodos() {
  todos.value = await $fetch('/api/todos');
}

async function addTodo() {
  await $fetch('/api/todos', {
    method: 'POST',
    body: { text: newTodo.value },
  });
  newTodo.value = '';
  fetchTodos();
}

async function updateTodo(todo) {
  await $fetch(`/api/todos/${todo.id}`, {
    method: 'PUT',
    body: { text: todo.text },
  });
}

async function deleteTodo(id) {
  await $fetch(`/api/todos/${id}`, {
    method: 'DELETE',
  });
  fetchTodos();
}

onMounted(fetchTodos);
</script>