import Fastify from 'fastify';
import mercurius from 'mercurius';

const start = async() => {
  const fastify = Fastify({ logger: true });

  try {
    fastify.get('/', async(request, reply) => {
      return { hello: 'world!' };
    });

    await fastify.register(mercurius, {
      graphiql: true,
    });
    await fastify.listen({ port: 3000 });
  } catch(error) {
    console.error(error);
  }
};

start();