import path from "path";
let __dirname = "";

const development = {
  client: "sqlite3",
  connection: {
    filename: "./main.sqlite3",
  },
  useNullAsDefault: true,
  migrations: {
    directory: path.join(__dirname, "./db/migrations"),
  },
  seeds: {
    directory: path.join(__dirname, "./db/seeds"),
  },
};

const test = {
  client: "sqlite3",
  connection: ":memory:",
  useNullAsDefault: true,
  migrations: {
    directory: path.join(__dirname, "./db/migrations"),
  },
  seeds: {
    directory: path.join(__dirname, "./tests/seeds"),
  },
};

export default { development, test };