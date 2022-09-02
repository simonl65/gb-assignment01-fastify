import { FastifyRequest } from "fastify";


export type FastifyRequestWithParams = FastifyRequest<{
  Params: {
    id: 'string';
  };
}>;


export interface ISite {
  id?: number,
  areaId: number,
  name: string,
  description: string,
  priceAdult?: number,
  priceChild?: number,
}