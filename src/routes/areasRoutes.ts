import { FastifyInstance } from 'fastify';
import { getAreas, getAreaById, getSitesByAreaId } from '../controllers/areasController';
import { getAreasOpts, getAreaByIdOpts } from '../models/areasModel';
import { getSitesOpts } from '../models/siteModel';


export default function areasRoutes(app: FastifyInstance, opts: Object, done: Function) {

  // Get all areas
  app.get('/', getAreasOpts, getAreas);

  // Get single area
  app.get('/:id', getAreaByIdOpts, getAreaById);
  app.get('/:id/sites', { ...getAreaByIdOpts, ...getSitesOpts }, getSitesByAreaId);

  done();
};