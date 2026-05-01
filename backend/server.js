const app = require("./src/app");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");

dotenv.config();

// connect DB only ONCE
connectDB();
console.log("EMAIL USER:", process.env.EMAIL_USER);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port", process.env.PORT || 5000);
});