// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("items.json");
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 4000;

// server.use(middlewares);
// server.use(router);
// server.listen(port);

const express = require("express");
const app = express();
const items = require("./api/items");

app.use(express.json({ extended: false }));

app.use("/api/items", items);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
