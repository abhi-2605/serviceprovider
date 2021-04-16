const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/servicedata');
const Schema = mongoose.Schema;
var NewServiceSchema = new Schema({
    serviceId: Number,
    servicename: String,
    serviceservice: String,
    servicearea: String,
    servicepincode: Number,
    servicephonenumber: Number,

})
var Productdata = mongoose.model('serviceprovider', NewServiceSchema); // here the SERVICPROVIDERS is name of the collection
module.exports = Productdata;