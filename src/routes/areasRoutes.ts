import { FastifyInstance } from 'fastify';
import { getAreas, getAreaById } from '../controllers/areasController';
import { getAreasOpts, getAreaByIdOpts } from '../models/areasModel';


export default function areasRoutes(app: FastifyInstance, opts: Object, done: Function) {

  // Get all areas
  app.get('/', getAreasOpts, getAreas);

  // Get single area
  app.get('/:id', getAreaByIdOpts, getAreaById);

  done();
};