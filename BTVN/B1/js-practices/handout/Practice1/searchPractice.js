'use strict'

function search(input, target) {
  for(let i=0; i<input.length; i++) {
       if(input[i]>=10000 || input[i]<=-10000){
            break;
        }
       if(input[i]>=input[i+1]){
            break;
        }
         if (input[i] == target) return i+1;
     } 
 }
module.exports = search
