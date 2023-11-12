const express = require("express");
const app = express();
const port = 3000;
const path =require("path")
const mongoose = require("mongoose");
const {fooditem,seconddb,thirddb} = require('./mongo'); 
const bodyParser = require('body-parser');
const { register } = require("module");
app.set("views",path.join(__dirname,"/views"))
app.use(bodyParser.text());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")))
app.post('/home', async (req, res) => {
  try{
    const data =await fooditem.find({});
    const { email, password } = req.body;
 
    seconddb.findOne({ email, password })
      .then((user) => {
        if (user) {
  
               res.render("home.ejs",{data})
        } else {
          res.status(401).send("Unauthorized: Incorrect email or password");
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Internal Server Error");
      });
  }  
    catch(e){
        console.log(e);
    }
   
});
app.post('/place', (req, res) => {
  const cartContent = req.body;
  let obj={
    order:`${cartContent}`
  }
const order = new thirddb(obj);
order.save();
  res.json({ message: 'Data received successfully' });
});
app.get("/home", async (req,res)=>{
  try{
    const data =  await fooditem.find({});
    
    res.render("home.ejs",{data});
  }
  catch{
    console.log("iNternal server is error ")
  }
})

app.get("/register",(req,res)=>{
    res.render("register.ejs")
})
app.get("/login",(req,res)=>{
    res.render("login.ejs")
})
app.post('/login', async (req, res) => {
    try {
        
        const data = await fooditem.find({});
        let obj =req.body;
        let user = new seconddb(obj);
        user.save()
        res.render('login.ejs', { data });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port,()=>{
    console.log("listeing ");
})





