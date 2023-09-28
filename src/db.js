import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "3.108.62.158",
  user: "root",
  password: "",
  port: 3306,
  database: "customersdb",
});
