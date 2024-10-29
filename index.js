const routes = require('./routes/todos')
const express = require('express');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());


const todoRoutes = require('./routes/todos');

app.use('/api/v1/', todoRoutes);


app.listen(PORT, () => {
  console.log(`app successfully runing on port ${PORT}`);
})


const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>This is homepage</h1>`)
})
