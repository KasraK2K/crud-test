const express = require("express");
const router = express.Router();

/* ------------------------------- CONTROLLERS ------------------------------ */
const customerController = require("../domain/customer/customer.controller");

router.post("/find", customerController.find.bind(this));
router.post("/findOne", customerController.findOne.bind(this));
router.post("/create", customerController.create.bind(this));
router.patch("/update", customerController.update.bind(this));
router.delete("/delete", customerController.delete.bind(this));

module.exports = router;
