import Joi from "joi";

// Define schema
const BOARD_COLLECTION_NAME = "boards";

const BOARD_COLLECTION_SCHEMA = Joi.object({
  title: Joi.string().min(3).max(255).required().trim().strict(),
  slug: Joi.string().min(3).required().trim().strict(),
  description: Joi.string().min(3).max(255).required().trim().strict(),

  columnOrderIds: Joi.array().items(Joi.string()).default([]),
  createdAt: Joi.date().timestamp().default(Date.now),
  updatedAt: Joi.date().timestamp().default(Date.now),
  _destroy: Joi.boolean().default(false),
});

export const boardModel = {
  BOARD_COLLECTION_NAME,
  BOARD_COLLECTION_SCHEMA,
};
