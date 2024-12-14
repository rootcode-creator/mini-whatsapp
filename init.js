if (process.env.NODE_ENV != "production") {
  require('dotenv').config();
}

const mongoose = require("mongoose");
const chat = require("./models/chat.js")

const dbUrl = process.env.ATLASDB_URL;

console.log(dbUrl);
main()
  .then(() => { 
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  // await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
  await mongoose.connect(dbUrl);

}

let allChats = [ 
    {
    from: "neha",
    to: "priya",
    msg: "Send me your exam sheets",
    created_at: new Date()
  },
  {
    from: "rohit",
    to: "mohit",
    msg: "Teach me Js callbacks",
    created_at: new Date()
  },
  {
    from: "amit",
    to: "sumit",
    msg: "All the best",
    created_at: new Date()
  },

  {
    from: "anita",
    to: "ramesh",
    msg: "Bring me some fruits",
    created_at: new Date()
  },
  {
    from: "tony",
    to: "peter",
    msg: "Tonys message to peter",
    created_at: new Date()
  },

];

chat.insertMany(allChats);
  