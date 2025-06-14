//this is the backend file
const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const mongoDB = require("./db")
mongoDB();

app.use((req,res,next) =>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next()
})

app.get('/',(req,res) => {
    res.send("hello world");
})
app.use(express.json());
app.use('/api', require("./Routes/CreateUser"))
app.use('/api', require("./Routes/DisplayData"))
app.get('/',(req,res) => {
    res.send("hello");
})


app.listen(port, () =>{
    console.log(`app listening on port ${port}`);
})
