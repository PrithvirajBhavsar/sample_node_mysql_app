import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "13.235.103.223",
  user: "prithvi",
  password: "password",
  database: "customersdb",
});
