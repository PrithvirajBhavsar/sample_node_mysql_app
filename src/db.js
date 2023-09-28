import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "ec2-65-0-4-227.ap-south-1.compute.amazonaws.com",
  user: "prithvi",
  password: "password",
  database: "customersdb",
});
