const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.all('*',bodyParser.json(),(req,res,next)=>{
  console.log(res.statusCode);
  console.table(req.headers);
  console.log(req.query);
  // console.log(req.ip);
  res.status(200).send({poes:'poes'})
  // next();
}).listen(3001, ()=>console.log('API Running'));
