const express=require("express");
const bodyParser=require("body-parser");
var app=express();

app.use(express.static('public'));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));

const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/todo");
const trySchema=new mongoose.Schema({
    name:String
});
const item=mongoose.model("second",trySchema);
// const todo=new item({
//     name:"create videos"
// });
// const todo2=new item({
//     name:"Learn DSA"
// });
// const todo3=new item({
//     name:"Learn React"
// });
// const todo4=new item({
//     name:"Practice apti"
// });
// todo2.save();
// todo3.save();
// todo4.save();


// var items=[];
// var example="working";
app.get("/",function(req,res){
    item.find({})
    .then(function(founditems){
        res.render("list",{ejes:founditems})
        }) 
     .catch(function(err){
        console.log(err);
     });
});
app.post("/",function(req,res){
    const itemName=req.body.ele1;
    const todo5=new item({
        name:itemName
    })
    todo5.save();
    // items.push(item);
    res.redirect("/");
})
app.post("/delete",function(req,res){
    const checked=req.body.checkbox1;
    item.findByIdAndDelete(checked)
    .then(function(){
        console.log("Deleted");
        res.redirect("/");
    })
    .catch(function(err){
        console.log(err);
    })
})
app.listen(8000,function(){
    console.log("server started");
});