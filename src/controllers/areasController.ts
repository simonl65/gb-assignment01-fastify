import { FastifyReply, FastifyRequest } from 'fastify';
import { FastifyRequestWithParams, ISite } from '../typings/miscTypes';
import Areas from '../data/Areas';
let areas = Areas;
import Sites from '../data/Sites';
let sites = Sites;


/**
 * Get all areas
 */
const getAreas = async (req: FastifyRequest, reply: FastifyReply) => {
  reply.send(areas);
};


/**
 * Get single area by its ID
 */
const getAreaById = async (req: FastifyRequestWithParams, reply: FastifyReply) => {
  const id = req.params.id;
  const area = areas.find((area) => {
    if (+(area.id) === +id) {
      return area;
    }
  });

  if (area) {
    reply.send(area);
  }
  else {
    reply.code(404).send({ statusCode: 404, message: 'Not Found' });
  }
};


/**
 * Get sites in specified area
 * NOTE: This is horribly inefficient because I'm not using a database ;-)
 */
const getSitesByAreaId = async (req: FastifyRequestWithParams, reply: FastifyReply) => {
  const areaId = req.params.id;
  let sitesInArea: ISite[] = [];

  sites.map((site) => {
    if (+(site.areaId) === +areaId) {
      sitesInArea.push(site);
    }
  });

  if (sitesInArea) {
    reply.send(sitesInArea);
  }
  else {
    reply.code(404).send({ statusCode: 404, message: 'Not Found' });
  }
};


export {
  getAreas,
  getAreaById,
  getSitesByAreaId,
};