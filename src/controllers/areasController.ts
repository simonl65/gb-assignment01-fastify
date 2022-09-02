import console from 'console';
import { FastifyReply, FastifyRequest } from 'fastify';
import Areas from '../data/Areas';
import { SLParams, SLReq } from '../routes/areasRoutes';
let areas = Areas;


/**
 * Get all areas
 */
const getAreas = async (req: FastifyRequest, reply: FastifyReply) => {
  reply.send(areas);
};


/**
 * Get single area by its ID
 */
const getAreaById = async (req: SLReq, reply: FastifyReply) => {
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


export {
  getAreas,
  getAreaById,
};