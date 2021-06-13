import { ConnectionOptions } from "typeorm";
import { Cheese, Purchase } from '../entities'

const config: ConnectionOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || "db",
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || "postgres",
    database: process.env.POSTGRES_DB || "pz-cheeseria",
    entities: [Cheese, Purchase],
    synchronize: true,
};

export default config;