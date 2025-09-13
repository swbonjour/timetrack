export default () => ({
  port: Number(process.env.PORT) || 3000,
  global_prefix: process.env.GLOBAL_PREFIX || 'api/v1',
});
