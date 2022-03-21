import Router from "express";
import { create,update,get,getById,remove} from "../Controllers/user.controller.js";


const user = Router();



user.get("/", get);
user.get("/:id", getById);
user.post("/create", create)

user.post("/update", update);
user.post("/delete",remove);


user.get("/profile", (req, res, next) => {
  res.send("Hello From User Profile");
});

user.post("/profile", (req, res, next) => {
  res.send("Hello From User Profile Post");
});


export default user;
