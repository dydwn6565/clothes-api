const express = require("express");
const app = express();
const items = require("./api/items");
const cors = require("cors");
app.use(cors());
app.use(express.json({ extended: false }));

app.use("/api/items", items);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));