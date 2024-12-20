import Joi from "joi";
import { getDatabase } from "~/config/mongodb";
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from "~/utils/validators";

// Define schema
const BOARD_COLLECTION_NAME = "boards";

const BOARD_COLLECTION_SCHEMA = Joi.object({
  title: Joi.string().min(3).max(255).required().trim().strict(),
  slug: Joi.string().min(3).required().trim().strict(),
  description: Joi.string().min(3).max(255).required().trim().strict(),

  columnOrderIds: Joi.array()
    .items(Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE))
    .default([]),
  createdAt: Joi.date().timestamp().default(Date.now),
  updatedAt: Joi.date().timestamp().default(Date.now),
  _destroy: Joi.boolean().default(false),
});

const createNew = async (data) => {
  try {
    const createdBoard = await getDatabase()
      .collection(BOARD_COLLECTION_NAME)
      .insertOne(data);
    return createdBoard;
  } catch (error) {
    throw new Error(error);
  }
};

const findOneById = async (boardId) => {
  try {
    const board = await getDatabase()
      .collection(BOARD_COLLECTION_NAME)
      .findOne({ _id: boardId });
    return board;
  } catch (error) {
    throw new Error(error);
  }
};

export const boardModel = {
  BOARD_COLLECTION_NAME,
  BOARD_COLLECTION_SCHEMA,
  createNew,
  findOneById,
};
