console.log("Hello World");

aFunction("Kim");

function aFunction(a){
    console.log("Hello "+a);
}



var bFunction = function(name,printName){
    printName(name);
}
bFunction("Hoa",aFunction);

//CallBack
function add5(getNumber,print){
    var num = getNumber()+5;
    print(num);
}
function randomNumber(){
    return Math.floor(Math.random()*1000); //floor la lam tron xuong, random 0-1000
}
function printNumber(num){
    console.log(num);
}

add5(randomNumber,printNumber);


// bFunction();

// var cFunction = ()=>{
//     console.log("Hello Wo");
// }

//Callback cho bat dong bo
// setTimeout(function(){
//     add5(randomNumber,printNumber);
// },1000*1);

console.log("Ahihi");
// -------------------------------------------------

//function scope
// var a = 10;
// function abc(){
//     var b =15;
//     function abcd(){
//         var c = 25;
    
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     abcd();
    
// }
// abc();

// console.log(a);
// console.log(b);

// function printNum(num, waitTime){
//     setTimeout(function(){
//         console.log(num);
//     },waitTime*1000);
// }
// function coutDown(num){
//     for(var i = num;i >=0;i--){
//         printNum(i,num-i);
//     }
// }
// coutDown(5);


function coutDown(num){
    var i=num;
    for(let i = num;i>=0;i--){
        setTimeout(function(){
            console.log(i);
        },(num-i)*1000);
    }
}

coutDown(5);
