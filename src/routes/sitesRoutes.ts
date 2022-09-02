import { FastifyInstance } from 'fastify';
import { addSite, getSites, getSiteById, deleteSite } from '../controllers/sitesController';
import { addSiteOpts, getSitesOpts, getSiteByIdOpts } from '../models/siteModel';


export default function sitesRoutes(app: FastifyInstance, opts: Object, done: Function) {

  // Add a new site
  app.post('/', addSiteOpts, addSite);
  // app.post('/', addSite);

  // Get all sites
  app.get('/', getSitesOpts, getSites);

  // Get single site
  app.get('/:id', getSiteByIdOpts, getSiteById);

  // Delete a site
  app.delete('/:id', deleteSite);

  done();
};