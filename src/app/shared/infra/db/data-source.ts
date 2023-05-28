import { DataSource } from 'typeorm';
import entities from './entities';
import migrations from "./migrations";
import config from "../../../config";

export const appDataSource = new DataSource({
    type: "postgres",
    url: config.databaseUrl,
    //logging: true,
    ssl: {
        rejectUnauthorized: false,
    },
    entities,
    migrations,
    synchronize: false,
});