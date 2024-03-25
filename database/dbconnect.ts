import * as dotenv from 'dotenv';
dotenv.config();
import { MongoClient } from 'mongodb';

const url = process.env.mongoURI || 'mongodb://localhost:27017';

export async function connectToDB(): Promise<MongoClient> {
  try {
    const client = await MongoClient.connect(url, {
        connectTimeoutMS: 5000,
        socketTimeoutMS: 30000,
    });
    console.log('Connected to MongoDB');
    return client;
  } catch (error) {
    throw new Error(`Failed to connect to MongoDB: ${error}`);
  }
}


