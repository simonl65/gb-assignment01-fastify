import { Type } from "@sinclair/typebox";
import { FastifyRequest } from "fastify";

// Sites schema
const Site = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    // areaId: { type: 'integer' },
    name: { type: 'string' },
    // description: { type: 'text' },
  },
};

// Options for get all sites
const getSitesOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        sites: Site,
      }
    }
  }
};

// Options for get single site
const getSiteByIdOpts = {
  schema: {
    params: Type.Object({
      id: Type.String()
    }),
    response: {
      200: Site
    },
  }
};

// export interface SLParams { id: string; }
export type FastifyRequestWithParams = FastifyRequest<{
  Params: {
    id: 'string';
  };
}>;

export { getSitesOpts, getSiteByIdOpts };