const express = require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db')
const customer = require('./model')



const path = '/customers'
const method = 'get'


app.use(bodyParser.json());

const john = new customer({
    id : 154545,
    name : "bharat",
    place: "18 alle de bir hakeim"
})

app.post('/customer/create',(req,res)=>{
 const sevran = new customer(req.body);
 sevran.save().then(result => {
     console.log('Sucess',result);
     res.send(result);
})
 .catch(err => console.log('error duude', err) )
 
})

app.get('/customer/',(req,res)=>{
    const sevran =  customer.find({}).then(result => {
        console.log('Sucess',result);
        res.send(result);
   })
    .catch(err => console.log('error duude', err) )
    
   })
   




console.log('API GENERATED : '+method + path )
app.listen(3334);