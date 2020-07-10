require("dotenv").config();

const { Model } = require("objection");
const knex = require("knex");

module.exports.createStore = () => {
  const db = knex({
    client: "pg",
    connection: {
      host: process.env.PG_HOST,
      port: Number.parseInt(process.env.PG_PORT),
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
    },
    log: {
      warn(message) {
        console.log("warn", message);
      },
      error(message) {
        console.log("error", message);
      },
      deprecate(message) {
        //console.log("deprecate", message);
      },
      debug(message) {
        console.log("debug", message);
      },
    },
  });
  Model.knex(db);

  class User extends Model {
    static get tableName() {
      return "user";
    }
  }

  return { db, User };
};
