var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
const config = require('./config/database');
mongoose.Promise = global.Promise;
//var config = "mongodb://localhost:27017/employees";
mongoose.connect(config.uri, {
    useMongoClient: true,
  }, (err) => {
    // Check if database was able to connect
    if (err) {
      console.log('Could NOT connect to database: ', err); // Return error message
    } else {
      console.log('Connected to ' + config.db); // Return success message
    }
  });
//mongoose.connect(config)
    //.connection
       // .on('connected',function(){
        //    console.log("successfully connected to "+ config)
       // })
        //.on('error',function(err){
         //   console.log("database error "+ err)
      //  })
var app = express();
var port = process.env.PORT || 3000 ;
//app.get('/', function(req, res){
  //  res.send("Hello from MaheFc...");
//});
var router = require('./routes');
//middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.static(__dirname + '/dist/index.html'));
app.use('/api/employees', router);
//Connect server to Angular 2 Index.html
app.get('*',(req,res)=>{
    res.sendfile(path.join(__dirname + '/dist/index.html'));
});

//Start Server:listen on port 3000
//var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Listening on port  "+ port);
})
