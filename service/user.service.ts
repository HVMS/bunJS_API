// import connect function from dbconnect.ts
import { connectToMongoDB, db } from '../database/dbconnect';
import { User } from '../model/user.model';
import { Db, MongoClient } from 'mongodb';
import config from '../database/config';

const DB_NAME = config.USER_DB;

class UserService {

    async getUserByEmail (user_email: String){
        try{
            const database = await connectToMongoDB(DB_NAME);
 
        } catch (error){
            console.error('Error connecting to the database', error);
        }
    }

    async createUser (user: User){
        if (!user.user_email) {
            return null;
        }
        if (( await this.getUserByEmail(user.user_email)) !== null){
            return null; 
        }
    }
}

export default UserService;