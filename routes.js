const Router = require("express").Router;
const router = new Router();

const user = require("./model/user/router");
const todo = require("./model/todo/router");

router.route("/").get((req, res) => {
  res.json({ message: "Welcome to generator-api API!" });
});

router.use("/user", user);
router.use("/todo", todo);

module.exports = router;
