import { FastifyInstance } from 'fastify';
import { getSites, getSiteById } from '../controllers/sitesController';
import { getSitesOpts, getSiteByIdOpts } from '../models/siteModel';



export default function sitesRoutes(app: FastifyInstance, opts: Object, done: Function) {

  // Get all sites
  app.get('/', getSitesOpts, getSites);

  // Get single site
  app.get('/:id', getSiteByIdOpts, getSiteById);

  done();
};