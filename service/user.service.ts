// import connect function from dbconnect.ts
import { connect } from '../database/dbconnect';
import { User } from '../model/user.model';
import { MongoClient } from 'mongodb';
import config from '../database/config';

const DB_NAME = config.USER_DB;

class UserService {

    async getUserByEmail (user_email: String){
        try{
            let client = await connect();
            const db = client.db(DB_NAME);

        } catch (error){
            console.error('Error connecting to the database', error);
        }
    }

    async createUser (user: User){
        if (( await this.getUserByEmail(user.user_email)) !== null){
            return null; 
        }
    }
}

export default UserService;