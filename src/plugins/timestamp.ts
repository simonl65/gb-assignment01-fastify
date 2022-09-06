import fp from 'fastify-plugin';

module.exports = fp(async (app) => {
  app.decorate('timestamp', function () {
    return Date.now();
  });
});