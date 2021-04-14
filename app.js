const express = require('express')
const bodyParser= require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
//ROUTES WILL GO HERE
var uploadRouter = require('./view/controller');
app.use('/', uploadRouter);
 
app.listen(5000, () => console.log('Server started on port 5000'));