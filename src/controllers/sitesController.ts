import { FastifyReply, FastifyRequest } from 'fastify';
import { FastifyRequestWithIdParam, SiteType } from '../typings/miscTypes';
import Sites from '../models/Sites';

let sites = Sites;


/**
 * Create a new site
 */
const addSite = async (req: SiteType, reply: FastifyReply) => {

  // TODO: Validate incoming data

  // Get new site data
  let { areaId, name, description, priceAdult, priceChild } = req.body;
  let area_id = parseInt(areaId); // Need to coerce number to integer

  // Get next id
  const id = sites.length + 1;

  // Add data to sites array
  // TODO: This should really be in the sitesModel?
  try {
    sites.push({ id, areaId: area_id, name, description, priceAdult, priceChild });
  } catch (err) {
    return reply.status(500).send(new Error('Site was not added'));
  }

  return reply.code(201).send('Site created OK');
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
const getSiteById = async (req: FastifyRequestWithIdParam, reply: FastifyReply) => {
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
const deleteSite = async (req: FastifyRequestWithIdParam, reply: FastifyReply) => {
  const { id } = req.params;
  const filteredSites = sites.filter((site) => {
    return site.id !== +id;
  });
  sites = filteredSites;
  reply.code(403).send({ message: 'Site deleted OK' });
};


export {
  addSite,
  getSites,
  getSiteById,
  deleteSite,
};