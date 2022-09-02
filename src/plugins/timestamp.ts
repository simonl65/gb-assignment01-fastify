const fp = require('fastify-plugin');

module.exports = fp(async (fastify) => {
  fastify.decorate('timestamp', function () {
    return Date.now();
  });
});