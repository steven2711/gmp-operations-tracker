const { Sequelize } = require("sequelize");

const db = async () => {
  const sequelize = new Sequelize("gmpmanager", "postgres", "password", {
    host: "localhost",
    dialect: "postgres",
  });

  try {
    await sequelize.authenticate();
    console.log(
      "Postgres connection has been established successfully.".cyan.bold
    );
  } catch (error) {
    console.error("Unable to connect to the database:".red, error);
  }
};

module.exports = db;
