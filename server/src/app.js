import express from "express";
import router  from "./Routes/index.route.js";
import customError from "./Utils/customError.util.js";


  const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/",router)


app.all("*",(req,res)=>{
 throw new customError(`Requested URL ${req.path} not found!`, 404,false);
})
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: 0,
    message: err.message,
    stack: err.stack,
  });
});               


export default app;
