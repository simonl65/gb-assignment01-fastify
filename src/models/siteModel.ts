import { Type } from "@sinclair/typebox";

// Sites schema
const Site = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
  },
};


// Options for site creation
const SiteAll = {
  type: 'object',
  properties: {
    areaId: { type: 'integer' },
    name: { type: 'string' },
    description: { type: 'string' },
    priceAdult: { type: 'number' },
    priceChild: { type: 'number' },
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
    body: {
      type: 'object',
      properties: {
        areaId: { type: 'integer' },
        name: { type: 'string' },
        description: { type: 'string' },
        priceAdult: { type: 'number' },
        priceChild: { type: 'number' },
      }
    },
    response: {
      200: { type: 'string', sites: Site },
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


export {
  addSiteOpts,
  getSitesOpts,
  getSiteByIdOpts
};