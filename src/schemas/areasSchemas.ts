import { Type } from "@sinclair/typebox";
import { FastifyRequest } from "fastify";

// Areas schema
const Area = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
  },
};

// Options for get all areas
const getAreasOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        areas: Area,
      }
    }
  }
};

// Options for get single area
const getAreaByIdOpts = {
  schema: {
    params: Type.Object({
      id: Type.String()
    }),
    response: {
      200: Area
    },
  }
};


export {
  getAreasOpts,
  getAreaByIdOpts,
};