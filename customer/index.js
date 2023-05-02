const express = require("express");
const { randomBytes } = require("crypto"); //generate new id
const cors = require("cors");
const axios = require("axios");
const swaggerUI = require('swagger-ui-express');
const docs = require('./docs');

const app = express();
app.use(express.json());
app.use(cors());

const users = require("../database/user");

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));
app.get("/customer", (req, res) => {
  res.send(users);
});

app.post("/customer", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { username, email, password, role = "customer" } = req.body;
  const customer = { id, username, email, password, role, orders: [] };

  const user = users.find((user) => user.email === email);
  console.log(user)
  if (user) {
    return res.status(400).send({ error: "Email already in use" });
  }

  await axios.post("http://localhost:5005/events", {
    type: "userCreated",
    data: customer,
  });

  res.status(201).send(customer);
});

app.post("/events", (req, res) => {
  console.log("Received Event", req.body.type);
  res.send({});
});

app.listen(5000, () => {
  console.log("Listening on 5000");
});
