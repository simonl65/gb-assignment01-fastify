import fastify, { FastifyInstance } from 'fastify';
import dotenv from 'dotenv';
dotenv.config();
// import db from './database/db';

import areasRoutes from './routes/areasRoutes';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
// import {siteRoutes} from "./routes/siteRoutes";

/**
 * SETUP
 */
// const app: FastifyInstance = Fastify({ logger: { level: 'debug' } }).withTypeProvider<TypeBoxTypeProvider>();
const app = fastify({ logger: true }).withTypeProvider<TypeBoxTypeProvider>();
const PORT: number = parseInt(process.env.APP_PORT as string) || 3000;

// app.register(db);

/**
 * ROUTES
 */
app.log.debug('Registering routes...');
// app.register(require('./routes/areasRoutes'), { prefix: '/api/v1/areas' });
app.register(areasRoutes, { prefix: '/api/v1/areas' });
// app.register(siteRoutes, { prefix: '/api/v1/sites' });
app.log.debug('Routes registration complete');

app.get("/", async () => {
  return {
    todo: {
      "1": "Re-instate strict type checking",
      "2": "/areas",
      "3": "/sites",
      "4": "Add database",
      "5": "Validation"
    }
  };
});



app.listen({ port: PORT }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`Listening on ${address}`);
});