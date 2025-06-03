//this is the backend file connecting to mongo db
//mongodb atlas is used to fetch data
const mongoose = require('mongoose');

const mongoURI = 'url';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to database");

    const foodItemsCollection = mongoose.connection.db.collection("collection");
    const foodCategoryCollection = mongoose.connection.db.collection("collection");

    const foodItems = await foodItemsCollection.find({}).toArray();
    const foodCategory = await foodCategoryCollection.find({}).toArray();

    if (!foodItems.length) {
      console.log("⚠️ No data found in gofooddata collection.");
    }

    global.food_items = foodItems;
    global.foodCategory = foodCategory;

    console.log("✅ Fetched food_items and foodCategory successfully.");

  } catch (err) {
    console.error("❌ Database connection error:", err);
  }
};

module.exports = mongoDB;


