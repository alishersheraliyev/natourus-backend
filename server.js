const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<db_password>",
  process.env.DB_PASSWORD
);

mongoose.connect(DB).then((con) => {
  console.log("DB connection successful");
});

const app = require("./app.js");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
