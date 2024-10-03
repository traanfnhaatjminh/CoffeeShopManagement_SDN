const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const port = 9999;

//Khai bao MongoDB Driver module
const { MongoClient } = require("mongodb");
//Khai bao cau hinh MongoDB Server
const mongoDB_URI = "mongodb://localhost:27017";
const dbName = "categories";

//Khai bao va khoi tao doi tuong ket noi CSDL
const client = new MongoClient(mongoDB_URI);
async function main() {
  //tien hanh ket noi CSDL
  await client.connect();
  console.log("Connect successfully");
  //Chi dinh CSDL va collection can lam viec
  const dbContext = client.db(dbName);
  const myCollection = dbContext.collection("categories");
  //CRUD basic
  //insertOne (done)
  const newDoc = {name:"bac siu", price: 40, quantity: 2, description:"qua ok"};
  //chen vao 1 document vao "department" collection
  await myCollection.insertOne(newDoc)
    .then(result => console.log(result));

  //insertMany (done)
  // const newDoc1 = { name: "ITu", location: { floor: 2, room: "102" } };
  // const newDoc2 = { name: "ITo", location: { floor: 3, room: "103" } };
  // await myCollection.insertMany([newDoc1, newDoc2])
  //     .then(result => console.log(result));

  //truy van lay ra tat ca cac departments
  const listP = await myCollection.find({}).toArray();
  console.log(listP);

  return "done";
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// Middleware
app.use(cors());
app.use(express.json());

// Dummy route for JWT
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simple check for demo purposes
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(403).json({ message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
