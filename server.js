const express = require("express");
const errHandler = require("./middleware/errorhandler.js");
const connectDb = require("./config/dbConnection.js");
const dotenv = require("dotenv").config();
const app = express();

connectDb();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes.js"));
app.use("/api/users", require("./routes/userRoutes.js"));
app.use(errHandler);

app.listen(PORT, () => {
  console.log(`App is listening on port:${PORT}`);
});
