const express = require("express");
const userController = require("../controllers/users.controller");
const router = express.Router();

router.get("/:userID", userController.getUser);
router.post("/", userController.create);

module.exports = router;
