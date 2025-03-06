// server/api/todos/[id].delete.js
export default defineEventHandler((event) => {
    const id = event.context.params.id;
    const stmt = global.db.prepare('DELETE FROM todos WHERE id = ?');
    stmt.run(id);
    return { success: true };
  });