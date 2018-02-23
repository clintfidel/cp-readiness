import express from 'express';
import winston from 'winston';


const app = express();
const router = express.Router();
const path = __dirname + '/views/';

router.use(function (req,res,next) {
  winston.info("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  winston.info(`Connected on port ${port}`);
});

