import { FastifyInstance } from 'fastify';
import { getAreas, getAreaById, getSitesByAreaId } from '../controllers/areasController';
import { getAreasOpts, getAreaByIdOpts } from '../schemas/areasSchemas';
import { getSitesOpts } from '../schemas/sitesSchemas';


export default function areasRoutes(app: FastifyInstance, opts: Object, done: Function) {

  // Get all areas
  app.get('/', getAreasOpts, getAreas);

  // Get single area
  app.get('/:id', getAreaByIdOpts, getAreaById);

  // Get all sites in specified area
  app.get('/:id/sites', { ...getAreaByIdOpts, ...getSitesOpts }, getSitesByAreaId);

  done();
};