import { StatusCodes } from "http-status-codes";
import { boardService } from "~/services/boardService";

const createNew = async (req, res, next) => {
  try {
    console.log("Request body: ", req.body);
    console.log("Request query: ", req.query);
    console.log("Request params: ", req.params);

    // Điều hướng dữ liệu qua tầng Serivce
    const createdBoard = await boardService.createNew(req.body);

    res.status(StatusCodes.CREATED).json(createdBoard);
  } catch (error) {
    next(error);
  }
};

export const boardController = {
  createNew,
};
