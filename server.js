const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { urlencoded } = require("express");

const app = express();

//create middleware to get http requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//connect to database
mongoose
  .connect(
    "mongodb+srv://Salon:Shamal123@cluster0.lfnirdw.mongodb.net/?retryWrites=true&w=majority"
  )
  .catch((err) => console.log(err));

//Database Schema and Model
const postSchema = mongoose.Schema({
  sId: String,
  sName: String,
  sPrice: String,
  sCategory: String,
});
//Create the model
const Post = mongoose.model("Post", postSchema);

app.get("/", (req, res) => {
  res.send("Express is here");
});

app.post("/create", (req, res) => {
  Post.create({
    sId: req.body.sId,
    sName: req.body.sName,
    sPrice: req.body.sPrice,
    sCategory: req.body.sCategory,
  })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.get("/posts", (req, res) => {
  Post.find()
    .then((items) => res.json(items))   //find all the items and hold that items in json format
    .catch((err) => console.log(err));   //if there is an error show it on the console
  
});

app.delete("/delete/:id", (req, res) => {
  //create route for delete
  Post.findByIdAndDelete({ _id: req.params.id })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.put("/update/:id", (req, res) => {
  Post.findByIdAndUpdate(
    { _id: req.params.id },
    {
      sId: req.body.sId,
      sName: req.body.sName,
      sPrice: req.body.sPrice,
      sCategory: req.body.sCategory,
    }
  )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.listen(3001, function () {
  console.log("server is running");
});




//For signup and login -------------------------------

const newSchema = new mongoose.Schema({
  name:{
    type: String,
    required:true
  },
  email:{
    type: String,
    required:true
  },
  password:{
    type:String,
    required:true
  }

});

const collection = mongoose.model("collection", newSchema)

module.exports = collection


app.get("/", cors(),(req,res)=> {

})

//Login
app.post("/", async(req,res) =>{
  const{name,email,password}=req.body

  try{
      const check = await collection.findOne({email:email})

      if(check){
        res.json("exist")
      }
      else{
        res.json("not-exist")
      }
  }
  catch(e){
    res.json("not-exist")
  }
})

//Signup
app.post("/signup", async(req,res) =>{
  const{name,email,password}=req.body

  const data={
    name:name,
    email:email,
    password:password,
    
  }
 

  try{
      const check = await collection.findOne({email:email})

      if(check){
        res.json("exist")
      }
      else{
        res.json("not-exist")
        await collection.insertMany([data])
      }
  }
  catch(e){
    res.json("not-exist")
  }
})

app.listen(8000, function () {
  console.log("Port connected");
});