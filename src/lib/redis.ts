import { createClient } from 'redis';

const client = createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_URL,
        port: Number(process.env.REDIS_PORT),
    }
});
client.on('error', (err) => console.error('Redis Client Error', err));

// Connect to Redis
(async () => {
  if (!client.isOpen) await client.connect();
})();

export default client;
