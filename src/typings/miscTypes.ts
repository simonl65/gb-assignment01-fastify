import { FastifyRequest } from "fastify";


export type FastifyRequestWithIdParam = FastifyRequest<{
  Params: {
    id: 'string';
  };
}>;


export type SiteType = FastifyRequest<{
  Body: {
    areaId: 'integer',
    name: 'string',
    description: 'string',
    priceAdult: 'number',
    priceChild: 'number',
  };
}>;


export interface ISite {
  id?: number,
  areaId: number,
  name: string,
  description: string,
  priceAdult?: number | string,
  priceChild?: number | string,
}