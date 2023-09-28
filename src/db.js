import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "65.2.129.27",
  user: "prithvi",
  password: "password",
  database: "customersdb",
  port:"3306",
});
