const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();

app.use(express.static('../HTML_CSS'));

// app.get('/',(req,res)=>{
//     axios({
//         url: 'https://btvn-web15s.herokuapp.com/' ,
//         method: 'GET'
//     }).then(function(){
//         //handle success
//         console.log(data);
//         res.send(data);
//     });

//     // console.log("Hello");
//     // res.sendFile(path.resolve(__dirname,'../HTML_CSS'));
// });

app.get('/:classroom',(req,res)=>{
    const classroomName = req.params.classroom;
    console.log(req.query);
    //req.query

    axios.get('https://btvn-web15s.herokuapp.com/api/'+classroomName).then(response => res.send(response.data))
})



app.listen(3000,(err)=>{
    if(err) console.log(err)
    else console.log("Server is listening at port 3000");
})