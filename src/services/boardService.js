import ApiError from "~/utils/ApiError";
import { slugify } from "~/utils/fomatters";

const createNew = async (reqBody) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title),
    };

    // Gọi tới tầng Model để lưu vào Database
    // ...

    // Làm thêm các xử lý logic khác ở đây nếu cần
    // Bắn email, thông báo, gửi tin nhắn, push notification...vv

    return newBoard;
  } catch (error) {
    throw error;
  }
};

export const boardService = {
  createNew,
};
