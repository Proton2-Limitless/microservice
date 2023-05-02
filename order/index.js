const express = require("express");
const { randomBytes } = require("crypto"); //generate new id
const cors = require("cors");
const axios = require("axios");
const orders = require("../database/order");
const products = require("../database/product");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/order/:userid", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const userid = req.params.userid;
  const { title, quantity } = req.body;
  const product = products.find((product) => product.title === title);
  if (!product) {
    return res.status(404).send({ error: "Product not found" });
  }

  const order = {
    id,
    product: { title, quantity, amount: product.price },
    status: "pending",
    userid,
  };

  await axios.post("http://localhost:5005/events", {
    type: "orderCreated",
    data: order,
  });

  res.status(201).send(order);
});

app.post("/events", (req, res) => {
  console.log("Received Event", req.body.type);
  res.send({});
});

app.listen(5001, () => {
  console.log("Listening on 5001");
});
