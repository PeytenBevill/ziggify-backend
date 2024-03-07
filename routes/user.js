const express = require("express");
const userController = require("../controllers/users.controller");
const router = express.Router();

router.get("/:_id", userController.getUser);
router.post("/", userController.create);

module.exports = router;
