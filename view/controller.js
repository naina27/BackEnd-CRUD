const express = require('express');
const router = express.Router();
const nodemailer=require("nodemailer");
const hbs=require('express-handlebars');
const springedge = require('springedge');
require("../database/db");
const userSchemaModel= require('../database/model') 
// router.get('/',function(req,res){
//   res.sendFile(__dirname + '/index.html');
// });
/*router.set('views', __dirname + '/views');
router.set('view engine','jade');*/
router.get("/", function(req,res){
  res.send("get response by port 5000");
});
router.use(express.json());

router.post("/insert", async(req,res)=>{
  try{
  const otp = Math.floor(Math.random() * 10000);
   const userdata={
    fname:req.body.fname,
    lname:req.body.lname,
    number:req.body.number,
    email:req.body.email,
    password:req.body.password,
    dateofbirth:req.body.dateofbirth,
    address:req.body.address,
    otp:otp
  }
 const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "niagupta773@gmail.com",
      pass: "niagupta@123",
    },
  });
  const mailOptions = {
    from: "niagupta773@gmail.com",
    to: req.body.email,
    subject: otp,
  };
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
     // res.send("error");
    } else {
      console.log();
      res.send("insert record successfull");
    }
  });
  //for mobile otp
  /*const params = {
  'apikey': 'AIzaSyACp63y759J7sJxsGI54kY3SYN8c1QAvDs', // API Key 
  'sender': 'nainsi', // Sender Name 
  'to': [
    req.body.number  //Moblie Number 
  ],
  'message': 'test+message'
};

springedge.messages.send(params, 5000, function (err, response) {
  if (err) {
    return console.log(err);
  }
  console.log(response);
});*/

 
  console.log(userdata);
  userSchemaModel.create(userdata);
}
catch(err){
  console.log(err,'err');
}
});


router.get('/show',async function(req, res)  {
  try{
 const userdata=  await userSchemaModel.find({});
res.send(userdata);
console.log(userdata);
 }
catch(err){
      console.log('error',err);
 }
 });

router.get('/show/',async function(req,res){
    const userdata=await userSchemaModel.find({'id':req.params});
    res.send(userdata);
    console.log('api hit');
});

router.put('/update/:id',async function(req,res){
  try{
    const id=req.params.id;
    /*if(!ObjectID.isValid(id))
      return res.status(400).send('no record found'+ id)*/
    var  updateRecord={
      fname:req.body.fname,
    lname:req.body.lname,
    number:req.body.number,
    email:req.body.email,
    password:req.body.password,
    dateofbirth:req.body.dateofbirth,
    address:req.body.address
    }
    const data=await userSchemaModel.findByIdAndUpdate(id,req.body,{$set:updateRecord},(err,docs)=>{
    if(!err){
      res.send(docs)
    } 
    else{
      res.send('error while updating data');
    }

    })
}
catch(error){
  console.log(error,'error')
}
})

router.delete("/delete/:id", async function(req,res){
  const id=req.params.id
  const data=await userSchemaModel.findByIdAndDelete(id,(err,result)=>{
    if(err){
      res.send("error");
    }
    else{
      res.send("record successfully delete")

    }
  })
})

module.exports=router;
