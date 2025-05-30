//this is the backend file connecting to mongo db
const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://soujanyabailawad:*********@cluster0.7wabyf2.mongodb.net/gofood?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to database");

    const fetched_data = mongoose.connection.db.collection("gofooddata");
    const data = await fetched_data.find({}).toArray();

    console.log("Data fetched from gofooddata:", data);
  } catch (err) {
    console.error("Database connection error:", err);
  }
};

module.exports = mongoDB;



