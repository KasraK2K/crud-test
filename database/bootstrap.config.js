const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);
