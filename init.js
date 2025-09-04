
const mongoose = require('mongoose');
const Chat=require("./models/chat.js");

main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp100');
};
 let allChats=[
    {
    from:"Antima",
    to:"Archana",
    message:"send me 2000 rupees",
    created_at:new Date(),
},
 {
    from:"Antima",
    to:"preeti",
    message:"send me 5000 rupees",
    created_at:new Date(),
},
 {
    from:"Antima",
    to:"Deedeee",
    message:"send me 10000 rupees",
    created_at:new Date(),
},
 {
    from:"Antima",
    to:"Bhaiya",
    message:"send me 20000 rupees",
    created_at:new Date(),
},
 {
    from:"Antima",
    to:"Mummy",
    message:"send me 50000 rupees",
    created_at:new Date(),
},
 {
    from:"Antima",
    to:"Papa",
    message:"send me 100000 rupees",
    created_at:new Date(),
},
];
Chat.insertMany(allChats);
