/**var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongo = require("moongose");

var db = mongo.connect("mongodb://localhost:27017/AngularCRUD", function(err, response){
    if(err){ console.log(err);}
    else{ console.log('Connected to ' + db, '+', response);}
});

var app = express()
app.use(bodyParser())
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(function (req, res, next){
    res.setHeader('Access-Coontrol-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Controll-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var Scheme = mongo.Scheme;

var UserSchema = new Scheme({
    FirstName: {type: String},
    LastName: {type: String},
},{ versionkey: false});

var model = mongo.model('users', UserSchema, 'users');
app.post("/api/SaveUser", function(req, res){
    var mod =new model(req.body);
    if(req.body.mode == "Save"){
        mod.save(function(err,data){
            if(err){
                res.send(err);
            }
            else{
                res.send({data: "Record has been Inserted..!!"});
            }
        });
    }
    else{
        model.findByIdAndUpdate(req.body.id,{FirstName: req.body.FirstName, LastName: req.body.LastName},
            function(err,data){
                if(err){
                    res.send(err);
                }else{
                    res.send({data:"Record has been updated"});
                }
            });
    }
})

app.post("/api/deleteUser", function(req,res){
    model.remove({_id: req.body.id}, function(err){
        if(err){
            res.send(err);
        }else{
            res.send({data: "Record has been Deleted"});
        }
    });
})

app.get("/api/getUser", function(req,res){
    model.find({}, function(err,data){
        if(err){
            res.send(err);
        }
        else{
            res.send(data);
        }
    });
})

app.listen(8080, function (){
    console.log('Example port')
})**/