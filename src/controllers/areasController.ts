import console from 'console';
import Areas from '../data/Areas';
let areas = Areas;


/**
 * Get all areas
 */
const getAreas = async (req, reply) => {
  reply.send(areas);
};


/**
 * Get single area by its ID
 */
const getAreaById = async (req, reply) => {
  const { id } = req.params;
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