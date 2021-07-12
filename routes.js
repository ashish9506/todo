const { Router } = require('express');
const router = new Router();

const todo = require('./model/todo/router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to generator-api API!' });
});

router.use('/todo', todo);

module.exports = router;
