import express from "express";
import { StatusCodes } from "http-status-codes";
import { boardRoutes } from "./boardRoutes";

const Router = express.Router();

Router.get("/status", (req, res) => {
  res.status(StatusCodes.OK).json({ message: "API v1 ready to use" });
});

// Board APIs
Router.use("/boards", boardRoutes);

export const APIs_V1 = Router;
