import config from '../database/config';
import { MongoClient, Db, MongoClientOptions } from 'mongodb';
const { log } = console;

// connect to the database
const connOpts: MongoClientOptions = {
    connectTimeoutMS: 5000,
};

const client = new MongoClient(config.MONGO_URI, connOpts);

export function db(database : string){
    return client.db(database);
}

export async function connectToMongoDB(database: string) {
    try {

        await client.connect();
        client.on("close", () => log("Mongo connection lost"));
        client.on("timeout", () => log("Mongo Timeout"));
        client.on("error", (e) => log(e.message));
        client.on("reconnect", () => log("Mongo Reconnect"));
        
        return db(database);
    } catch (error) {
        console.error('Error connecting to the database', error);
    }
};

