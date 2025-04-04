export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log('Data diterima:', body);
    return {
      message: 'Data diterima!',
      data: body,
    };
  });