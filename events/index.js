const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/events", (req, res) => {
  const event = req.body;
  axios.post("http://localhost:5000/events", event); //customer
  axios.post("http://localhost:5001/events", event); //order
  axios.post("http://localhost:5002/events", event); //products
  axios.post("http://localhost:5003/events", event); //query

  res.send({ status: "OK" });
});

app.listen(5005, () => {
  console.log("Listening on 5005");
});