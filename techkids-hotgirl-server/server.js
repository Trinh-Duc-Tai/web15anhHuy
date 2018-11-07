const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UserRouter = require("./routers/userRouter");
const ImageRouter = require("./routers/imageRouter");
const CommentRouter = require("./routers/commentRouter");

mongoose.connect("mongodb://localhost/techkids-hotgirl");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/api",(req,res)=>{
    res.send("Api router");
})

app.use("/api/users", UserRouter);
app.use("/api/images",ImageRouter);
app.use("/api/comments",CommentRouter);


//Middleware
UserRouter.use((req, res, next)=>{
    console.log("404");
    res.send("404 error");
});

const port = 6969;
app.listen(port, (err)=>{
    if(err) console.log(err);
    else console.log("Listen at port "+port);
});
