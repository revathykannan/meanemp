const crypto = require('crypto').randomBytes(256).toString('hex'); //provides cryptographic function

//Export config object
module.exports = {
   // uri= 'mongodb://localhost:27017/employees', //Database URI and database name
    uri= 'mongodb://<dbuser>:<dbpassword>@ds123896.mlab.com:23896/employees', //production
    secret: crypto, //Crypto-created secret
    db: 'employees' //Database name
}
