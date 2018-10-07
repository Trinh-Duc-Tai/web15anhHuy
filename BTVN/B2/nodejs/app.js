const fs = require('fs');

const http = require('http');

const server = http.createServer();

server.listen(3000); //so co 4 chu so

const objData = {
    name: "Huy",
    age: 18
}

//JSON 


// console.log("Data: "+ JSON.stringify(objData));
// console.log("Start write file");
// fs.writeFile('test.txt',JSON.stringify(objData),(err)=>{
//     if(err) console.log(err)
//     else console.log("Write file success!");
// });
// console.log("End write file");

// fs.writeFileSync
// console.log("Start write file");
// fs.readFile('test.txt',(err, data)=>{
//     if(err) console.log(err)
//     else console.log("Write file success! Data: "+data);
// });
// console.log("End write file");


// console.log("Start read file");
// const fileData = fs.readFile('test.txt',(err,data)=>{
//     if(err) console.log(err);
//     else return data;
// });
// console.log(fileData);
// console.log("End read file");

console.log("Start read file sync");
const fileDataSync = fs.readFileSync('test.txt',{encoding:'utf-8'});
console.log(fileDataSync);

const dataObj = JSON.parse(fileDataSync);
console.log(dataObj.name + ' chua '+dataObj.age);
console.log("End read file sync");
