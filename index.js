const express = require("express");
const app = express();
const items = require("./api/items");
const cors = require("cors");
const bodyparser = require("body-parser");
const stripe = require("stripe")(
  "sk_test_51KWFQPG6LrFQPHnX5IVqUFMV9ANjh2n6xoxaxFllzIveyHtJxgs40KYOxTVKMuTpRaWdrx4RiZ65aGY96IiOsUhA00GQXEfO4j"
);
const uuid = require("uuid").v4;

app.use(cors());
app.use(express.json({ extended: false }));

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

app.use("/api/items", items);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
