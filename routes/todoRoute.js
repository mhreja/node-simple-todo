var express = require("express");
var router = express.Router();
const TodoController = require("../controllers/TodoController");

/* GET home page. */
router.get("/", TodoController.index);
router.post("/store", TodoController.store);
router.post("/update/:id", TodoController.update);
router.post("/delete/:id", TodoController.destroy);

module.exports = router;
