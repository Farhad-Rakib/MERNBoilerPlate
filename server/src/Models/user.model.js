import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({

   name:{
      type : String,
      required: true,
     
   } ,
   userName:{
      type : String,
      required: true,
      unique: true,
   },
   email : {
      type : String,
      required: true,
      unique: true,
      lowercase : true
   },
   password: {
      type : String,
      required: true,
      
   },
   photo : {
      type : String,
     
   },
   createdAt: {
      type : Date,
     
   },
   createdBy: {
      type : Number,
     
   }
  
})

userSchema.pre('save',async function(next){

   try {
      if (this.isNew) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword; 
      }
      next();
   } catch (error) {
      next(error);
   }
   

});

var user = mongoose.model("user", userSchema);

export default user;