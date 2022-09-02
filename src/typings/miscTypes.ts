import { FastifyRequest } from "fastify";

export interface SLParams { id: string; }

export type FastifyRequestWithParams = FastifyRequest<{
  Params: {
    id: 'string';
  };
}>;
