require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const userRouters = require('./routes/userRoutes');

const app = express();
app.use(express.json());


sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    return sequelize.sync();  // Esta línea sincroniza los modelos con la base de datos.
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  app.use("/api/users", userRouters)

  app.listen(process.env.PORT || 5001, () => {
    console.log('Server is running')
  })