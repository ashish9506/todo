const { Router } = require('express');
const { body } = require('express-validator/check');
const controller = require('./controller');
const router = new Router();
const validator = require('../../utils/validator');

router
  .route('/')
  .get((...args) => controller.findAll(...args))
  .post([body('todo').exists(), validator], (...args) => controller.create(...args));

router.route('/delete/:id').delete((...args) => controller.destroy(...args));
router.route('/update/:id').put((...args) => controller.update(...args));

module.exports = router;
