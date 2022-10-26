const express = require('express')
const app =express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());

const categories = require('./category.json')
app.get('/categories',(req,res)=>{
    res.send(categories)
})
app.get('/',(req, res)=>{

    res.send('Api Runing')
})

app.listen(port, ()=>{
    console.log('api runiing port',port);
})