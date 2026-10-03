import mongoose from "mongoose";

const mongoUri = process.env.MONGO_URI

export const connectDB = async () => {

    try {
        await mongoose.connect(mongoUri)
        console.log("Mongodb Connected")
    } catch (error) {
        console.error("Failed To Connect DB", error)
    }
}