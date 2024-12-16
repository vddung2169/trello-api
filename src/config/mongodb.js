/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import { MongoClient, ServerApiVersion } from "mongodb";
import { env } from "./environment";

let trelloDatabaseInstance = null;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const connectDatabase = async () => {
  await mongoClientInstance.connect();

  trelloDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME);
};

// Get the database instance, throw an error if the database is not connected
export const getDatabase = () => {
  if (!trelloDatabaseInstance) {
    throw new Error("Call connectDatabase first");
  }
  return trelloDatabaseInstance;
};

// Close the database connection when the Node.js process is terminated
export const closeDatabase = async () => {
  console.log("Closing MongoDB connection...", process.env.USERNAMEDB);
  await mongoClientInstance.close();
};
