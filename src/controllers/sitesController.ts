import { FastifyReply, FastifyRequest } from 'fastify';
import Sites from '../data/Sites';
import { FastifyRequestWithParams, ISite } from '../typings/miscTypes';
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


/**
 * Delete the specified site
 */
const deleteSite = async (req: FastifyRequestWithParams, reply: FastifyReply) => {
  const { id } = req.params;
  const filteredSites = sites.filter((site) => {
    return site.id !== +id;
  });
  sites = filteredSites;
  reply.code(403).send({ todo: 'Implement delete site', id: id, filtered: sites });
};


export {
  getSites,
  getSiteById,
  deleteSite,
};