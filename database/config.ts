import * as dotenv from 'dotenv';
dotenv.config();

export default {
    PORT: process.env.PORT || 3001,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/bunrest',
    DATABASE: process.env.USER_DB || 'example_user_db',
    USER_COLLECTION: process.env.USER_COLLECTION || 'example_user_collection',
};