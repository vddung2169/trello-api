import Joi from "joi";
import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/ApiError";

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
    await correctConditions.validateAsync(req.body, {
      // abortEarly: false - bắn ra được tất cả các lỗi validation (không dừng lại ở lỗi đầu tiên)
      abortEarly: false,
    });

    // Nếu không có lỗi thì chuyển sang middleware tiếp theo (Controller)
    next();
  } catch (error) {
    const errorMessage = new Error(error).message;
    const customError = new ApiError(
      StatusCodes.UNPROCESSABLE_ENTITY,
      errorMessage
    );
    next(customError);
  }
};

export const boardValidation = {
  createNew,
};
