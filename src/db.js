import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "13.235.241.196",
  user: "root",
  password: "",
  port: 3306,
  database: "customersdb",
});
