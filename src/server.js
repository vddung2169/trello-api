/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from "express";
import exitHook from "async-exit-hook";
import { mapOrder } from "~/utils/sorts.js";
import {
  connectDatabase,
  getDatabase,
  closeDatabase,
} from "~/config/mongodb.js";
import { env } from "./config/environment";

const START_SERVER = () => {
  const app = express();

  const hostname = "localhost";
  const port = 8017;

  app.get("/", async (req, res) => {
    // Test Absolute import mapOrder
    console.log(await getDatabase().listCollections().toArray());
    res.end("<h1>Hello World!</h1><hr>");
  });

  app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(
      `Hello ${env.USERNAME_DB}, I am running at ${hostname}:${port}/`
    );
  });

  exitHook(() => {
    console.log("Server is shutting down...");
    closeDatabase();
  });
};

(async () => {
  try {
    // Test Relative import mapOrder
    console.log("Connecting to MongoDB...");
    connectDatabase();
    console.log("Connected to MongoDB successfully");
    START_SERVER();
  } catch (error) {
    console.error("MongoDB connection error: ", error);
    process.exit(0);
  }
})();

// Chỉ khởi chạy server khi kết nối MongoDB thành công
// connectDatabase()
//   .then(() => console.log("MongoDB connected successfully"))
//   .then(() => START_SERVER())
//   .catch((error) => {
//     console.error("MongoDB connection error: ", error);
//     process.exit(0);
//   });
