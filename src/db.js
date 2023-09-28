import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "3.109.3.180",
  user: "harry",
  password: "MyStrongPassword1234$",
  port: 3306,
  database: "customersdb",
});
