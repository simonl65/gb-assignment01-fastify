import console from 'console';
import Areas from '../data/Areas';
let areas = Areas;


/**
 * Get all areas
 */
const getAreas = async (req, reply) => {
  return reply.send(areas);
};


/**
 * Get single area by its ID
 */
const getAreaById = async (req, reply) => {
  const { id } = req.params;
  console.log('--- ID:', id); // TODO: SRL REMOVE
  const area = areas.find((area) => {
    console.log('-->', area);
    if (parseInt(area.id) === +id) {
      console.log('RETURNING:', area);
      return area;
    }
  });
  return reply.send(area);
};


export {
  getAreas,
  getAreaById,
};