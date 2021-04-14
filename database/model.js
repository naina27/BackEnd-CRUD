const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({

 fname:{
		type:String,
		required:'this field is required',
		unique:[true,"fname can be unique"]
	},
 lname:{
      type:String,
       required:'This field is required.'
    },
 number:{
      type:Number,
       required:true	
    },
 email:{
 	   type: String,
       required:true,
       unique:[true,"email already exist"]
    },
  password:{
 	   type:String,
 	   required:true
    },
  dateofbirth:{
      type: String,
      required:true
    },
  address:{
    	type:String,
    	required:true,
    	trim:true 
    	},
  otp:{
	type:Number
     },

},
{
	timestamps:true
}
);
const userSchemaModel=mongoose.model('myuser',userSchema);
module.exports = userSchemaModel;