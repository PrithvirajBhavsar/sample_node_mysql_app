import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "ec2-35-154-218-201.ap-south-1.compute.amazonaws.com",
  user: "prithvi",
  password: "password",
  database: "customersdb",
  port:"3306",
});
