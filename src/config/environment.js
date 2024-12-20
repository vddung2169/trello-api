/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import "dotenv/config";

export const env = {
  PORT: process.env.APP_PORT,
  HOSTNAME: process.env.APP_HOST,
  MONGODB_URI: process.env.MONGODB_URI,
  DATABASE_NAME: process.env.DATABASE_NAME,
  USERNAME_DB: process.env.USERNAMEDB,
  PASSWORD_DB: process.env.USERNAMEDB,

  BUILD_MODE: process.env.BUILD_MODE,
};
