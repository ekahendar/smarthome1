// server/api/todos.get.js
export default defineEventHandler(() => {
    const todos = global.db.prepare('SELECT * FROM todos').all();
    return todos;
  });