const express = require('express');
const path = require('path');
const app = express(); //dung let or const


//Get, Put, Post, Delete

//localhost:3000
app.use(express.static('navBTVN2'));
app.get('/',(req,res)=>{
    console.log("Hello")
    // res.send({success: 1, data: "Hello"});
    //res.sendFile("E:\\private\\TechKid\\Web11\\web15\\BTVN\\B2\\index.html");
    res.sendFile(path.resolve(__dirname,'navBTVN2/indexCB.html'));
    //auto nodemonc 
});
// app.get('/btvn2.css',(req,res)=>{
//     console.log("Hello")
//     // res.send({success: 1, data: "Hello"});
//     //res.sendFile("E:\\private\\TechKid\\Web11\\web15\\BTVN\\B2\\index.html");
//     res.sendFile(path.resolve(__dirname,'../nav/btvn2.css'));
// });
// app."method"('url',(req,res)=>{

// });


app.listen(3000,(err)=>{
    if(err) console.log(err)
    else console.log("Server is listening at port 3000");
})