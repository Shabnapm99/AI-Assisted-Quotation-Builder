import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);//configure connection to db
        console.log("DB connected successfully!!!");
    } catch (error) {
        console.log(`Something went wrong : ${error.message}`);
    }
}