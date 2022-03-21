
import mongoose  from "mongoose";
import User from "../Models/user.model.js"




export const createUser =  async (userObj) => {

   var user = new User(userObj);
   user.createdAt = Date.now();
   user.createdBy= 1;
    return await user.save();

}

export const gelAllUser = async () => {
   return await User.find();
};

export const gelUserById = async (id) => {
  return await User.findById(id);
};

export const updateUser = async (userObj) => {

  var id = userObj._id;
  console.log(id); 
   const isValidUser = mongoose.Types.ObjectId.isValid(id);
  if (!isValidUser) return isValidUser;  
  return await User.findByIdAndUpdate(id,userObj,{new:true});
};

export const deleteUser = async (userObj) => {
  var id = userObj._id;
  console.log(id);
  const isUserValid = mongoose.Types.ObjectId.isValid(id);
  if (!isUserValid) return isUserValid;
  return await User.findByIdAndRemove(id);
};