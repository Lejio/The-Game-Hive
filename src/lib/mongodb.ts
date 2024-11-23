import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_CONNECTION_STRING as string; // Add your MongoDB connection string here
const options = {};

if (!process.env.MONGODB_CONNECTION_STRING) {
  throw new Error("Please add your MongoDB URI to .env.local");
}


const client = new MongoClient(uri, options);
const clientPromise = client.connect();


export default clientPromise;
