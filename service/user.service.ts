import { Db } from 'mongodb';
import user from '../model/user.model';
import { connectToDB } from '../database/dbconnect';
import * as dotenv from 'dotenv';
dotenv.config();

const usersCollectionName = process.env.usersCollectionName || 'users';
const dbName = process.env.dbName;

class UserService {

    async getUserByEmail(user: user) {
        try {
            const client = await connectToDB();
            const db: Db = client.db(dbName);

            const userDetails = await db.collection(usersCollectionName).findOne(user_email);
            console.log(userDetails);
            
            await client.close();
            if (userDetails) {
                return userDetails;
            }

        } catch (error) {
            console.error('Error connecting to the database', error);
        }
    }

    async createUser(user: user) {
        if ((await this.getUserByEmail({user_email: user.user_email})) != null) {
            return;
        }

        try {
            // Connect to MongoDB
            const client = await connectToDB();
            const db: Db = client.db(dbName);

            // Check user credentials in the MongoDB collection
            console.log(user);

            const new_user = await db.collection(usersCollectionName).insertOne(user);

            await client.close();
            return new_user;
        } catch (error) {
            console.log(error);
        }
    }
}

export default UserService;