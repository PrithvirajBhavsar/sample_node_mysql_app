import { createConnection } from "mysql2/promise";

export const pool = createConnection({
  host: "ec2-13-235-103-223.ap-south-1.compute.amazonaws.com",
  user: "prithvi",
  password: "password",
  database: "customersdb",
  port:"3306",
});
