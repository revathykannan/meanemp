var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var path = require('path');
const routes = require('./routes');
const model = require('./model');
//var config = "mongodb://localhost:27017/employees";
mongoose.Promise = global.Promise;
var uri = "mongodb://revathy:admin123@ds133746.mlab.com:23896/employees";

mongoose.connect(uri) => {
    if (err) {
        console.log('Could NOT connect to database: ', err);
    } else {
        console.log('Connected to database: ' + uri);
}
   // .connection
   //     .on('connected',function(){
    //        console.log("successfully connected to "+ config)
      //  })
        //.on('error',function(err){
          //  console.log("database error "+ err)
      //  })

var app = express();

app.get('/', function(req, res){
    res.send("Hello from MaheFc...");
});
var router = require('./routes');
//middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.static(__dirname + 'client/dist/'));
app.use('/api/employees', router);
//Connect server to Angular 2 Index.html
app.get('*',(req,res)=>{
    res.sendfile(path.join(__dirname + '/client/dist/index.html'));
});

//Start Server:listen on port 3000
   app.listen(process.env.PORT || 3000) ;

})
