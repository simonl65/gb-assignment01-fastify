import Fastify from 'fastify';
const app = Fastify({ logger: true });
// import Areas from '../data/Areas';
// let areas = Areas;
let areas = require('../data/Areas');
console.log('=================AREAS', areas);

/**
 * Get all areas
 */
const getAreas = async (req, reply) => {
  app.log.debug('=== areasController === getAreas');
  return reply.send(areas);
};


/**
 * Get single area by its ID
 */
const getAreaById = async (req, reply) => {
  app.log.debug('=== areasController === getAreaById');
  const { id } = req.params;
  console.log('--- ID:', id);
  // const area = areas.find((area) => area.id === id);
  return reply.send(areas);
};


export {
  getAreas,
  getAreaById,
};