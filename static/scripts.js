window.addEventListener('load', () =>{
    registerSW();
});
let display = document.getElementById("screen");
let clear = document.getElementById("clear");
let numbers = document.getElementsByClassName("numbers");
let operators = document.getElementsByClassName("operator");
let equals = document.getElementById("equals");
let oldvalue = "";
let newvalue = "";
let resultvalue = "";
let mathoperator = "";
let storedvalues = "";
let decimalclicked = false;
//clear the calculator display screen
clear.onclick = function(){
    oldvalue = "";
     newvalue = "";
     resultvalue = "";
     mathoperator = "";
     storedvalues = "";
     display.innerText = newvalue;
}
//input numbers class on the calculator display screen
function displayNumbers(num){
    if(resultvalue){
        newvalue = num;
        resultvalue = "";
       
    }else{
        if(num === '.'){
            if(decimalclicked!=true){
                newvalue+=num;
                decimalclicked = true; 
                 
            }
        }else{
            newvalue+=num;
           
        }
    }
    display.innerText = newvalue;
console.log(newvalue);
}

//operations when a math operator is clicked
 function selectOperators(operator){
     if(!resultvalue){
        oldvalue = newvalue; 
     }else{
          oldvalue =resultvalue;
     }
     newvalue = "";
     decimalclicked = false;
     mathoperator = operator;
     resultvalue = "";
     display.innerText = mathoperator; 
     console.log(mathoperator);
      }
      //
     //operation when equals button is clicked
 function calculations(num) {
     decimalclicked = false;
     oldvalue = parseInt(oldvalue);
     newvalue = parseInt(newvalue);
     switch(mathoperator){ 
         case "+":
             resultvalue = oldvalue + newvalue;  
         break;
         case "-":
             resultvalue = oldvalue - newvalue;  
         break;
         case "x":
             resultvalue = oldvalue * newvalue;  
         break;
         case "÷":
             resultvalue = oldvalue / newvalue;  
         break;
         default:
              resultvalue = newvalue;
            
            } 
            oldvalue = resultvalue;
            display.innerText = resultvalue;
            console.log(resultvalue);
        }
        equals.onclick = function(){
            calculations();
        }
        async function registerSW() { 
            if ('serviceWorker' in navigator) { 
              try {
                await navigator.serviceWorker.register('./service-worker.js'); 
              } catch (e) {
                alert('ServiceWorker registration failed. Sorry about that.'); 
              }
            } else {
              document.querySelector('.alert').removeAttribute('hidden'); 
            }
          }
        
