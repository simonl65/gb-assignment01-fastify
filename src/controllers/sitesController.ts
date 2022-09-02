import { FastifyReply, FastifyRequest } from 'fastify';
import Sites from '../data/Sites';
import { FastifyRequestWithParams } from '../models/siteModel';
let sites = Sites;


/**
 * Get all sites
 */
const getSites = async (req: FastifyRequest, reply: FastifyReply) => {
  reply.send(sites);
};


/**
 * Get single site by its ID
 */
const getSiteById = async (req: FastifyRequestWithParams, reply: FastifyReply) => {
  const id = req.params.id;
  const site = sites.find((site) => {
    if (+(site.id) === +id) {
      return site;
    }
  });

  if (site) {
    reply.send(site);
  }
  else {
    reply.code(404).send({ statusCode: 404, message: 'Not Found' });
  }
};


export {
  getSites,
  getSiteById,
};