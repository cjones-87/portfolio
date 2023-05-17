const router = require('express').Router();

router.use('/projects', require('./projects')); //all backend tasks related requests will have to use: /api/projects/
router.use('/users', require('./users')); //all backend users related requests will have to use: /api/users/

//error handling for when an API that doesn't exist in entered
router.use(function (req, res, next) {
  const err = Error('Not found.');
  err.status = 404;
  console.log('why isnt this shit working', err.name, err);
  next(err);
});

module.exports = router;
