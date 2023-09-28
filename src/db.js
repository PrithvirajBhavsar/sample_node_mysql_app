import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "ec2-13-235-241-196.ap-south-1.compute.amazonaws.com",
  user: "mysql",
  password: "",
  database: "customersdb",
});
