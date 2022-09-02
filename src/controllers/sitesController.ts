import { FastifyReply, FastifyRequest } from 'fastify';
import Sites from '../data/Sites';
import { FastifyRequestWithParams, FastifyRequestWithSiteBody } from '../typings/miscTypes';
let sites = Sites;


/**
 * Create a nerew site
 */
const addSite = async (req: FastifyRequestWithSiteBody, reply: FastifyReply) => {
  // Validate incoming data
  // TODO: Validation
  console.log('BODY:', typeof req.body.name);

  let { areaId, name, description, priceAdult, priceChild } = req.body;
  let area_id = parseInt(areaId);
  let price_Adult = 0.00;
  let price_Child = 0.00;

  // Get next id
  const id = ++sites.length;

  // Add data to sites array
  try {
    sites.push({ id, areaId: area_id, name, description, priceAdult: price_Adult, priceChild: price_Child });
    reply.code(201).send('Site created OK');
  } catch (err) {
    return reply.status(500).send(new Error('Site was not added'));
  }
};


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
    return reply.status(404).send(new Error('Site not found'));
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
  addSite,
  getSites,
  getSiteById,
  deleteSite,
};