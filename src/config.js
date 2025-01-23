import { config } from "dotenv";
config();

export const database = {
  connectionLimit: 10,
  host: process.env.DATABASE_HOST || "byrppkh8z9aqvicedhzs-mysql.services.clever-cloud.com",
  user: process.env.DATABASE_USER || "ukj8ofvhf1uctlh3",
  password: process.env.DATABASE_PASSWORD || "WgUF2S23MQT6Gmp1uczu",
  database: process.env.DATABASE_NAME || "byrppkh8z9aqvicedhzs",
  port: process.env.DATABASE_PORT || 3306,
};

export const port = process.env.PORT || 4000;

export const SECRET = process.env.SECRET || 'some secret key';