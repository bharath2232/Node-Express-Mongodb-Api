const mongoose  = require('mongoose');
const Schema = mongoose.Schema
const sevranSchema = new Schema({

    id : {
        type:Number
    },
    name : {
        type:String
    },
    place : {
        type:String
    }

})

const Customer = mongoose.model('Sevran',sevranSchema);
module.exports = Customer;

