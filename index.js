const express = require('express')
require('dotenv').config();
const cors = require('cors')
const app = express()
const path = require('path');
const generate  =  require('./router/generate.js');



//setuptanferdata
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}));


app.use(express.static(path.join(__dirname,'public')));

//set path openai
app.use('/openai' , require ('./router/generate'));



app.get('/id', async function  (req, res) {
    res.send('home');
})


app.listen(9999, function () {
  console.log('web server listening on port 9999')
})