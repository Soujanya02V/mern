const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require("./db")
mongoDB();

app.get('/',(req,res) => {
    res.send("hello world");
})

app.listen(port, () =>{
    console.log(`app listening on port ${port}`);
})