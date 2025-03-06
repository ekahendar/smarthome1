// server/api/todos.post.js
export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const stmt = global.db.prepare('INSERT INTO todos (text) VALUES (?)');
    const result = stmt.run(body.text);
    return { id: result.lastInsertRowid };
  });