import mongoose from "mongoose";

export const connect = async () => {
    const con = await mongoose.connect("mongodb://localhost:27017/node_post_demo");
    if (con) console.log("database connected successfully");   
}