const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.sendfile(__dirname+'/public/answer.html');
});
app.get('/ask',(req,res)=>{
    res.sendfile(__dirname+'/public/ask.html');
});
app.get('/answer',(req,res)=>{
    res.sendfile(__dirname+'/public/answer.html');
});

app.post('/createquestion',(req,res)=>{
    console.log(req.body);
    let questionList = JSON.parse(fs.readFileSync('./question.json'));
    const newQuestion = {
        id: questionList.length, //0,1,2,3
        questionContent: req.body.questionContent,
        yes:0,
        no:0
    }
    questionList.push(newQuestion);
    fs.writeFileSync('./question.json',JSON.stringify(questionList));
    res.redirect('/answer');
});

app.use(express.static('public'));



app.listen(6969,(err)=>{
    if(err) console.log(err)
    else console.log('Server is listening at port 6969');
});