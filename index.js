const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const chat = require("./models/chat.js");
const ExpressError = require("./ExpressError");
const path = require("path");
const app = express();
const port = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//Index Route
app.get("/chats", asyncWrap( async (req, res) => {
  let chats = await chat.find();
  let total = chats.length;
  console.log(chats);
  res.render("index.ejs", { chats, total });
  
}));

//New Route
app.get("/chats/new", (req, res) => {
  res.render("form.ejs");
});

app.post("/chats", asyncWrap( async (req, res, next) => {

  
  let { from, to, msg } = req.body;
  let newChat = new chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });

  await newChat.save();

    // .then((res) => {
    //   console.log(res);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });

  res.redirect("/chats");
  

}));

//Wrap Function
function asyncWrap(fn) {

  return function(req, res, next) {
    fn(req, res, next).catch( (err) => next(err) );
  };
}



//New - Show Route 
app.get("/chats/:id", asyncWrap( async (req, res, next) => {
  let {id} = req.params;
  let Chat = await chat.findById(id);
  if (!Chat) {
    next(new ExpressError(500, "Chat not found"));
    
  }
  res.render("edit.ejs", {Chat} );

}));


//Edit Route

app.get("/chats/:id/edit", asyncWrap( async (req, res, next) => {
  let { id } = req.params;
  let details = await chat.findById(id);
  res.render("edit.ejs", { details });
 
}));

//Update Route
app.put("/chats/:id", asyncWrap( async (req, res) => {
  let { id } = req.params;
  let { msg } = req.body;
  let updatedChat = await chat.findByIdAndUpdate(
    id,
    { msg: msg },
    { runValidators: true, new: true }
  );
  console.log(updatedChat);
  res.redirect("/chats");
  
}));

//Destroy Route
app.delete("/chats/:id", asyncWrap( async (req, res) => {

  let { id } = req.params;
  let deletedChat = await chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");

}));

app.get("/", (req, res) => {
  res.send("Working");
});




//Error handaling middleware
app.use( (err, req, res, next) => {
  let { status = 500, message = "Some error occured" } = err;
  res.status(status).send(message);
});


app.listen(port, () => {
  console.log(`Server is started on ${port}`);
});
