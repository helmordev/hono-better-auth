import { config } from "dotenv";

config({ path: ".env" });
export const {
  PORT,
  NODE_ENV,
  DATABASE_URL,
  BETTER_AUTH_URL,
  BETTER_AUTH_SECRET,
  RESEND_API_KEY,
  FROM_EMAIL,
  APP_NAME,
} = process.env;
