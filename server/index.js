//our sequelize instance is created in 'database.js'
const db = require('./db/database');

//server that was created and used as the previous entry point is 'app.js'
const app = require('./app');
const port = process.env.PORT || 3000;

//this block is syncing our database
const init = async () => {
  try {
    await db.sync().then(() => {
      console.log(
        `Knock, knock...\nWho's there?\nYour server, listening on port ${port}`
      );

      app.listen(port);
    });
  } catch (error) {
    console.log('There was an error initializing the app');
  }
};

init();
