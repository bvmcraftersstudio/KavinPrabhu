const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const contactRoute = require("./routes/contact")
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/", contactRoute);

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));