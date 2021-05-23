const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const fs = require('fs');

const app = express();
const router = express.Router();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost/movie_rating_app', function(){
  console.log('Connection has been established!');
})
  .catch(err =>{
    console.error('App starting error:', err.stack);
    process.exit(1);
  });

// include controllers
fs.readdirSync("controllers").forEach(function (file){
  if(file.substr(-3) == ".js"){
    const route = require("./controllers" + file);
    console.log('route', route);
    route.controller(app);
  }
})

router.get('/', function(req, res){
  res.json({message: 'API Initialized'});
})

const port = process.env.API_PORT || 8081;
app.use('/', router);
app.listen(port, function(){
  console.log(`api running on port ${port}`);
})