const controller = require("./controller");
const Router = require("express").Router;
const router = new Router();

router
  .route("/")
  .get((...args) => controller.findAll(...args))
  .post((...args) => controller.create(...args));

router.route("/delete/:id").delete((...args) => controller.destroy(...args));
router.route("/update/:id").put((...args) => controller.update(...args));

module.exports = router;
