import express from "express";
import { createUser,gelAllUser,gelUserById,updateUser,deleteUser} from "../Services/user.service.js";
import customError from "../Utils/customError.util.js";

export const create = async(req,res,next)=>{
   try{
      var result = await createUser(req.body);
      console.log(result);
      if (result) {
        return res.status(200).json({
          success: 1,
          message: "User created successfully",
        });
      }else{
         throw new customError(`User Already Exists with ${req.body.email}`,200)
      }
   
   }catch(err){
      next(err);
   }
}  
export const update = async(req,res,next)=>{
   try{
      var result = await updateUser(req.body);
      console.log(result);
      if (result) {
        return res.status(200).json({
          success: 1,
          message: "User updated successfully",
        });
      }else{
         throw new customError(result,200)
      }
   
   }catch(err){
      next(err);
   }
   

}

export const get = async (req, res, next) => {
  try {
    var result = await gelAllUser();
    console.log(result);
    if (result) {
      return res.status(200).json({
        success: 1,
        message: result,
      });
    } else {
      throw new customError(result, 404);
    }
  } catch (err) {
    next(err);
  }
};

export const getById = async (req, res, next) => {
  try {
   const {id} = req.params
    var result = await gelUserById(id);
    console.log(result);
    if (result) {
      return res.status(200).json({
        success: 1,
        message: result,
      });
    } else {
      throw new customError(result, 404);
    }
  } catch (err) {
    next(err);
  }
};

export const remove = async (req, res, next) => {
  try {
    
    var result = await deleteUser(req.body);
    console.log(result);
    if (result) {
      return res.status(200).json({
        success: 1,
        message: `user ${result.name} deleted sucessfully`,
      });
    } else {
      res.status(404).json({
        success: 0,
        message: `Requested User Doesn't Exist`,
    })
  } }catch (err) {
    next(err);
  }
};