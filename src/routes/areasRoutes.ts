import { FastifyInstance } from 'fastify';
import { getAreas, getAreaById } from '../controllers/areasController';
// const { getAreas, getAreaById } = require('../controllers/areasController');

// Areas schema
const Area = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
  },
};

// Options for get all areas
const getAreasOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        areas: Area,
      }
    }
  }
};

// Options for get single area
const getAreaByIdOpts = {
  schema: {
    response: {
      200: Area
    },
  }
};


export default function areasRoutes(app: FastifyInstance, opts: Object, done: Function) {

  // Get all areas
  app.get('/', getAreasOpts, getAreas);

  // Get single area
  app.get('/:id', getAreaByIdOpts, getAreaById);

  done();
};