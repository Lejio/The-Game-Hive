import { createClient, RedisClientType } from 'redis';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let client: RedisClientType<any>;


// Initialize Redis Client
const initializeRedis = () => {
    if (!client) {
        client = createClient({
            password: process.env.REDIS_PASSWORD,
            socket: {
                host: process.env.REDIS_URL,
                port: Number(process.env.REDIS_PORT),
            }
        });

        client.on('error', (err) => console.error('Redis Client Error', err));

        // Connect only if not already connected
        if (!client.isOpen) {
            client.connect().catch(err => {
                console.error('Failed to connect to Redis:', err);
            });
        }
    }

    return client;
};

// Export the Redis Client
const redisClient = initializeRedis();

export default redisClient;
