import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const DATABASE = mysql.createPool({
  "host": process.env.DB_HOST,
  "port": parseInt(process.env.DB_PORT as string),
  "user": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_NAME
});

export default DATABASE;