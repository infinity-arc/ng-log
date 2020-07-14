const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json({ type: 'application/json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

app.all('*',(req,res,next)=>{
  console.log(res.statusCode);
  // console.table(req.headers);
  console.log(req.query);
  // console.log(req.params);
  // console.log(req.raw);
  // console.log(req.query);
  console.log(req.body);
  // console.log(req.ip);
  res.status(200).json({poes:'poes'})
  // next();
}).listen(3001, ()=>console.log('API Running'));
