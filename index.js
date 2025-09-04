const express=require("express");
const app=express();
let port=8080;
const path=require("path");
const Chat=require("./models/chat.js");
const methodOverride=require("method-override");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:"true"}));
app.use(methodOverride("_method"));

const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp100');
}
app.listen(port,()=>{
    console.log(`app is listening at ${port}`);
});

app.get("/",(req,res)=>{
    // console.log("get request received");
    res.send("working");
});
//index route
app.get("/chats",async(req,res)=>{
    // res.send("root is working");
   let chats= await Chat.find();
//console.log(chats);
   res.render("index.ejs",{chats});
});
//new route
app.get("/chats/new",async(req,res)=>{
    // res.send("root is working");
//    let ();
//    console.log(chats);
   res.render("new.ejs");
});
//create route
app.post("/chats",(req,res)=>{
    let {from,to,message}=req.body;
    let newChat=new Chat({
    from:from,
    to:to,
    message:message,
    created_at:new Date(),
    });
    newChat.save().then(res=>{
        console.log("chat was saved");
    }).catch((err)=>{
      console.log(err);  
    });
    console.log(newChat);
    res.redirect("/chats");
});
//Edit route
app.get("/chats/:id/edit",async (req,res)=>{
    let {id}=req.params;
   let chat=  await Chat.findById(id);
        res.render("edit.ejs",{chat});
});
//Update Route
app.put("/chats/:id",async(req,res)=>{
      let {id}=req.params;
      let {message:newMsg}=req.body;
      let updatedChat= await Chat.findByIdAndUpdate(id,{message:newMsg},{runValidators:true,new:true});
      console.log(updatedChat);  
      res.redirect("/chats");
});
//destroy route
app.delete("/chats/:id",async (req,res)=>{
    let {id}=req.params;
   let DeletedChat= await Chat.findByIdAndDelete(id);
   console.log(DeletedChat);
   res.redirect("/chats");
})
let chat1= new Chat({
    from:"Antima",
    to:"Archana",
    message:"send me 2000 rupees",
    created_at:new Date(),
});
chat1.save().then((res=>{
    console.log(res);
}));