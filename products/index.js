const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios"); //generate new id

const app = express();
app.use(express.json());
app.use(cors());

const products = require("../database/product");
const users = require("../database/user");

app.get("/products", (req, res) => {
  res.send(products);
});

app.post("/products/:userid", async (req, res) => {
  const id = randomBytes(4).toString("hex");

  const { title, price, category } = req.body;
  const userid = req.params.userid;
  const user = users.find((user) => user.id === userid);
  console.log(user)
  if (!user.role.includes("superadmin")) {
    return res.status(400).send({ error: "user not authorised" });
  }
  const product = { id, title, price, category, userid };
  
  await axios.post("http://localhost:5005/events", {
    type: "productCreated",
    data: product,
  });

  res.status(201).send(product);
});

app.post("/events", (req, res) => {
  console.log("Received Event", req.body.type);
  res.send({});
});

app.listen(5002, () => {
  console.log("Listening on 5002");
});
