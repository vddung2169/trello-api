import Joi from "joi";
import { StatusCodes } from "http-status-codes";

const createNew = async (req, res, next) => {
  const correctConditions = Joi.object({
    title: Joi.string().min(3).max(255).required().trim().strict().messages({
      "string.base": "Title must be a string",
      "string.empty": "Title cannot be an empty field",
      "string.min": "Title must have at least {#limit} characters",
      "string.max": "Title must have at most {#limit} characters",
      "any.required": "Title is a required field",
    }),
    description: Joi.string()
      .min(3)
      .max(255)
      .required()
      .trim()
      .strict()
      .messages({
        "string.base": "Description must be a string",
        "string.empty": "Description cannot be an empty field",
        "string.min": "Description must have at least {#limit} characters",
        "string.max": "Description must have at most {#limit} characters",
        "any.required": "Description is a required field",
      }),
  });

  try {
    console.log("Request body: ", req.body);

    await correctConditions.validateAsync(req.body, {
      // abortEarly: false - bắn ra được tất cả các lỗi validation (không dừng lại ở lỗi đầu tiên)
      abortEarly: false,
    });
    // next();

    res
      .status(StatusCodes.CREATED)
      .json({ message: "POST from Validation: API create new board" });
  } catch (error) {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ error: new Error(error).message });
  }
};

export const boardValidation = {
  createNew,
};
