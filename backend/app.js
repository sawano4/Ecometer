// app.js
const express = require("express");
const serverConfig = require("./config/server");
const connectToDb = require("./db/index");
const clientRouter = require("./routes/client");
const categoryRoutes = require("./routes/categoryRoutes");
const bilanRoutes = require("./routes/bilanRoutes");
const adminRoutes = require("./routes/admin");
const app = express();
const cors = require("cors");
//connect to db
connectToDb();
// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Routes and other middleware...
app.use("/api/admin/", adminRoutes);
app.use("/api/categories/", categoryRoutes);
app.use("/api/Emission/", categoryRoutes);
app.use("/api/clients/", clientRouter);
app.use("/api/bilans/", bilanRoutes);

// Start the server
app.listen(serverConfig.port, () => {
  console.log(`Server is running on port ${serverConfig.port}`);
});
