import mongoose from "mongoose";

export const connectDB = async () => {
    const { connection } = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB is connected with ${connection.host}`)
}