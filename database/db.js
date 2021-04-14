const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/Mydb',{useNewUrlParser:true},(err)=>{
	if(!err){
		console.log('mongodb connected')
	}
	else{
		console.log("not connected:"+err)
	}
});
require('./model');