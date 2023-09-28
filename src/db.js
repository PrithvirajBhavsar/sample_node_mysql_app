import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "ec2-13-235-103-223.ap-south-1.compute.amazonaws.com",
  user: "prithvi",
  password: "password",
  database: "customersdb",
});
