import Router from "express";


const auth = Router();


auth.get("/register", (req, res, next) => {
  res.send("Hello From Register");
});


auth.post("/register", async(req, res, next) => {
  res.send(req.body);
});

auth.get("/login", (req, res, next) => {
  res.send("Hello From Login");
});


auth.post("/login", (req, res, next) => {
  res.send("Hello From Login Post");
});

auth.get("/logout", (req, res, next) => {
  res.send("Hello From Logout");
});
export default auth;
