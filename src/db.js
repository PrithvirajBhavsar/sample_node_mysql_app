import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "35.154.218.201",
  user: "prithvi",
  password: "password",
  database: "customersdb",
  port:"3306",
});
