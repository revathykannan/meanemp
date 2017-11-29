var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var config = "mongodb://localhost:27017/employees";
mongoose.connect(config)
    .connection
        .on('connected',function(){
            console.log("successfully connected to "+ config)
        })
        .on('error',function(err){
            console.log("database error "+ err)
        })
var app = express();
var port = 3000 ;
app.get('/', function(req, res){
    res.send("Hello from MaheFc...");
});
var router = require('./routes');
//middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + 'client/dist/'));
app.use('/api/employees', router);
//Connect server to Angular 2 Index.html
app.get('*',(req,res)=>{
    res.sendfile(path.join(__dirname + '/client/dist/index.html'));
});

//Start Server:listen on port 3000
app.listen(port, function(){
    console.log("Listening on port  "+ port);
})