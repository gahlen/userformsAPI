const express = require("express");
const cors = require("cors");
const body = require("body-parser");
const app = express();
const port = process.env.PORT || 4000;
// This allows the use of app.body.
app.use(body.json());
app.use(cors());

let contacts = [ 
  {
    firstname: "Gahlen",
    lastname: "Fridley",
    age: "28",
    phone: "801-801-8010",
    email: "gahlen.fridley@gmail.com",
    password: "test",
    id: 1
  },

  {
    firstname: "Tiina",
    lastname: "Fridley",
    age: "28",
    phone: "801-801-8012",
    email: "tiina.fridley@gmail.com",
    password: "test",
    id: 2
  }
];

// This code works without {} because it is a single expression.
app.get("/", (req, res) => res.send(contacts));

app.post("/", (req, res) => {
  req.body.id = contacts.length + 1;
  console.log("Log1",req.body.id); 

  contacts.push(req.body);
  console.log("Log2",contacts);
  //return res.send(contacts);
});

app.put("/", (req, res) => {
  data = req.body;
  console.log(data);
  return res.send("Got a Put request");
});

app.delete("/", (req, res) => {
  data = req.body;
  data = [];
  console.log(data);
  return res.send("Got a DELETE request");
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
