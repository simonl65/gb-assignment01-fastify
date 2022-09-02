import { Type } from '@sinclair/typebox';
import { FastifyInstance, FastifyRequest } from 'fastify';
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
    params: Type.Object({
      id: Type.String()
    }),
    response: {
      200: Area
    },
  }
};

export interface SLParams { id: string; }
export type FastifyRequestWithParams = FastifyRequest<{
  Params: {
    id: 'string';
  };
}>;

export default function areasRoutes(app: FastifyInstance, opts: Object, done: Function) {

  // Get all areas
  app.get('/', getAreasOpts, getAreas);

  // Get single area
  app.get('/:id', getAreaByIdOpts, getAreaById);

  done();
};