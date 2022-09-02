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


// Options for site creation
const SiteAll = {
  type: 'object',
  properties: {
    areaId: { type: 'integer' },
    name: { type: 'string' },
    description: { type: 'text' },
    priceAdult: { type: ['number', 'null'] },
    priceChild: { type: ['number', 'null'] },
  }
};


// Options for get all sites
const getSitesOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        sites: SiteAll,
      }
    }
  }
};


const addSiteOpts = {
  schema: {
    params: {
      type: 'object',
      properties: SiteAll,
    },
    response: {
      200: SiteAll,
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


export {
  addSiteOpts,
  getSitesOpts,
  getSiteByIdOpts
};