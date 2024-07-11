const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/api");
const webhookRoutes = require("./routes/webhook");

const app = express();

app.use(bodyParser.json());
app.use("/api", apiRoutes);
app.use("/webhook", webhookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
