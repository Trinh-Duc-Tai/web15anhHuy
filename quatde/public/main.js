console.log("Hello");

const maxLength = 200;
const questionContentElem = document.getElementById('idQuestion');
const remainCharElem = document.getElementById('remain');

questionContentElem.addEventListener(
    'input',
    function(){
    var remainChar = maxLength - questionContentElem.value.length;
    remainCharElem.innerHTML = remainChar;
    }
);