const { application } = require("express");
const express = require("express");
const router = express.Router();

/* --------------------------------- ROUTES --------------------------------- */
const customerRoutes = require("./customer.route");

/* ----------------------------- REGISTER ROUTES ---------------------------- */
router.use("/customers", customerRoutes);

module.exports = router;
