import config from '../database/config';
import { MongoClient } from 'mongodb';

// connect to the database

export async function connect() {
    const client = new MongoClient(config.MONGO_URI, {
        connectTimeoutMS: 5000,
        socketTimeoutMS: 30000,
    });
    try {
        await client.connect();
        console.log('Connected to the database');
        return client;
    } catch (error) {
        console.error('Error connecting to the database', error);
    }
};

