const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const ProductData = require('./src/model/servicedata');
const passdata = require('./src/model/passauth');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors()); // to share data from this server to angular server 
app.use(bodyparser.json());



function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if (!payload) {
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}

app.get('/servicedetails', (req, res) => {
    res.header('Access-Control-Allow-Origin', "*") // use of this that from any orgin u are getting the request of productapp then u they can acess
    res.header('Access-Control-Allow-Methds : GET , POST, PATCH , PUT ,DELETE ,OPTIONS');
    ProductData.find().then((SERVICEPROVIDERS) => {
        res.send(SERVICEPROVIDERS);
        console.log('sucessfully sent');

    });
});

app.post('/insert', function(req, res) {

    console.log(req.body);

    var product = {
        serviceId: req.body.product.serviceId,
        servicename: req.body.product.servicename,
        serviceservice: req.body.product.serviceservice,
        servicearea: req.body.product.servicearea,
        servicepincode: req.body.product.servicepincode,
        servicephonenumber: req.body.product.servicephonenumber,
    }
    var product = new ProductData(product);
    product.save();
});

app.post('/signupauth', function(req, res) {

    console.log(req.body);

    var passauth = {


        servicefirstname: req.body.passauth.servicefirstname,
        servicelastname: req.body.passauth.servicelastname,
        serviceuser: req.body.passauth.serviceuser,
        servicepass: req.body.passauth.servicepass,
        servicephonenumber: req.body.passauth.servicephonenumber
    }
    var passauth = new passdata(passauth);
    passauth.save();
});

app.get("/accounts/searchaccount/:user", (req, res) => {

    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    const email = req.params.user;

    passdata.findOne({ serviceuser: email })
        .then(function(SERVICEPROVIDERS) {
            res.send(SERVICEPROVIDERS);
            console.log(SERVICEPROVIDERS);
        });

});

app.delete('/remove/:id', (req, res) => {

    id = req.params.id;
    ProductData.findByIdAndDelete({ "_id": id })
        .then(() => {
            console.log('success')
            res.send();
        })
})
app.get('/:id', (req, res) => {

    const id = req.params.id;
    ProductData.findOne({ "_id": id })
        .then((product) => {
            res.send(product);
        });
})

app.put('/update', (req, res) => {
    console.log(req.body)
    id = req.body._id,
        serviceId = req.body.serviceId,
        servicename = req.body.servicename,
        serviceservice = req.body.serviceservice,
        servicearea = req.body.servicearea,
        servicepincode = req.body.servicepincode,
        servicephonenumber = req.body.servicephonenumber,

        ProductData.findByIdAndUpdate({ "_id": id }, {
            $set: {
                "serviceId": serviceId,
                "servicename": servicename,
                "serviceservice": serviceservice,
                "servicearea": servicearea,
                "servicepincode": servicepincode,
                "servicephonenumber": servicephonenumber,
            }
        })
        .then(function() {
            res.send();
        })
})

app.listen(1212);