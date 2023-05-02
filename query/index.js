const express = require("express");
const cors = require("cors");
const products = require("../database/product");
const users = require("../database/user");
const orders = require("../database/order");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/events/users", (req, res) => {
  res.send(users);
});
app.get("/events/products", (req, res) => {
  res.send(products);
});

app.get("/events/orders", (req, res) => {
  res.send(orders)
});

app.post("/events", (req, res) => {
  //   console.log("Received Event", req.body.type);
  if (req.body.type === "userCreated") {
    users.push(req.body.data);
  }
  if (req.body.type === "productCreated") {
    products.push(req.body.data);
  }
  if (req.body.type === "orderCreated") {
    const { id, product, status, userid } = req.body.data;
    const od = orders[userid];
    const userIndex = users.findIndex((user) => user.id === userid);
    
    console.log(od);
    if(!od){
        console.log("reached here2");
        const newUserOrder = {
            id: id,
            products: [product],
            totalPrice: product.amount * product.quantity,
            status: status,
        };
        orders[userid] = newUserOrder
        users[userIndex].orders.push(newUserOrder);
        return res.send({});
    }
    console.log("reached here3");
    const productIndex = od.products.findIndex((produt) => produt.title === product.title); 
    let totalPrice = od.totalPrice
    // let quantity = product.quantity
    // let newProduct = od.products[productIndex]
    if(productIndex === -1){
        totalPrice += product.amount * product.quantity
        od.products.push(product);
    }
    if(productIndex !== -1){
        od.products[productIndex].quantity += product.quantity
        totalPrice += product.amount * product.quantity
        od.products[productIndex] = {title: od.products[productIndex].title, quantity: od.products[productIndex].quantity, amount: od.products[productIndex].amount}
    }

    const order = {
      id,
      products: od.products,
      totalprice: Number(totalPrice),
      status,
    };
    orders[userid] = order;
    users[userIndex].orders = [order];

    
    console.log(order)

  }

  res.send({});
});

app.listen(5003, () => {
  console.log("Listening on 5003");
});
