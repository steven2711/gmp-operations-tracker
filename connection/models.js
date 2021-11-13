const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("gmpmanager", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

// Connect models to db
const User = require("../models/user")(sequelize, Sequelize);

module.exports = { User };
