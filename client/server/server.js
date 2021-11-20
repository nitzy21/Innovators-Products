const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();

const innovationRoutes = require("./innovation_routes/innovationRoutes.js");
const investmentRoutes = require('./innovation_routes/investmentRoutes.js');
//const userRoutes = require('./innovation_routes/userRoutes.js');
const innovatorRoutes = require("./innovator_routes/innovatorRoutes.js");
const productRoutes = require("./product_routes/productRoutes.js");

const adminRoutes = require("./admin/admin_server");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/api/innovations", innovationRoutes);
// app.use('/api/investment', investmentRoutes);
// //app.use('/api/user', userRoutes);
// app.use("/", innovatorRoutes);
// app.use("/", productRoutes);

app.use("/", adminRoutes);

app.listen(3003, () => {
  console.log("Running on port 3003");
});
