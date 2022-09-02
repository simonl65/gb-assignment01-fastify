import Fastify from 'fastify';
import dotenv from 'dotenv';
dotenv.config();
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
// import db from './database/db';

// IMPORT ROUTES
import areasRoutes from './routes/areasRoutes';
import sitesRoutes from "./routes/sitesRoutes";

/**
 * SETUP
 */
const app = Fastify({ logger: true }).withTypeProvider<TypeBoxTypeProvider>();
const PORT: number = parseInt(process.env.APP_PORT as string) || 3000;

// app.register(db);

/**
 * ROUTES
 */
app.log.debug('Registering routes...');
app.register(areasRoutes, { prefix: '/api/v1/areas' });
app.register(sitesRoutes, { prefix: '/api/v1/sites' });
app.log.debug('Routes registration complete');

app.get("/", async () => {
  return {
    todo: {
      "1": "Add database",
      "2": "Validation"
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