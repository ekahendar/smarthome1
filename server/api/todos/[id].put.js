// server/api/todos/[id].put.js
export default defineEventHandler(async (event) => {
    const id = event.context.params.id;
    const body = await readBody(event);
    const stmt = global.db.prepare('UPDATE todos SET text = ? WHERE id = ?');
    stmt.run(body.text, id);
    return { success: true };
  });