import * as dotenv from 'dotenv';
dotenv.config();

export default {
    PORT: process.env.PORT || 3001,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/bunrest',
    USER_DB: process.env.USER_DB || 'example_user_db',
};