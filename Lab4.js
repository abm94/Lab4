/*Lab4.js*/

let inputBar = document.getElementById("inputBar");
let prevNum=0;
let whichOperator="";

let addButton            =  document.getElementById('addButton');

                           
let subtractButton       =  document.getElementById('substractButton')
let divisionButton       =  document.getElementById('divisionButton');
let multiplicationButton =  document.getElementById("multiplicationButton");
let equalsButton         =  document.getElementsByClassName("equalButton")[0];
let resultsBar           =  document.getElementById("resultValue")
let resetButton          =  document.getElementsByClassName("resetButton")[0];
//When we hit add we want to save the input and then 
//                we want to save the last input to prevNum and clear the input
//And save that we hit plus



subtractButton.addEventListener('click',(event) => {
    console.log("Subtract Button Pressed.");
    lastOperator();
    console.log("prevNum = ",prevNum,"\n");
    inputBar.value="";
    whichOperator = '-';
    console.log("whichOperator = ",whichOperator,"\n");
});

addButton.addEventListener('click',(event) => {
    console.log("Add Button Pressed.");
    lastOperator();
    console.log("prevNum = ",prevNum,"\n");
    inputBar.value="";
    whichOperator='+';
    console.log("whichOperator = ",whichOperator,"\n");
});

divisionButton.addEventListener('click',(event) => {
    console.log("/ Button Pressed.");
    lastOperator();
    console.log("prevNum = ",prevNum,"\n");
    inputBar.value="";
    whichOperator='/';
    console.log("whichOperator = ",whichOperator,"\n");
});

multiplicationButton.addEventListener('click',(event) => {
    console.log("* Button Pressed.");
    lastOperator();
    console.log("prevNum = ",prevNum,"\n");
    inputBar.value="";
    whichOperator='*';
    console.log("whichOperator = ",whichOperator,"\n");
});

equalsButton.addEventListener('click', (event) => {
   
     console.log("= pressed.");
    lastOperator();
    console.log("prevNum = ",prevNum,"\n");
    resultsBar.value=prevNum;
    inputBar.value="";
    whichOperator="";
});

function lastOperator(){
    
    let ipt=Number(inputBar.value);
    
    if(whichOperator=='*'){
        prevNum*=ipt;
    }
    else if(whichOperator=='/'){
        prevNum/=ipt;
    }
    else if(whichOperator=='+'){
        prevNum+=ipt;
    }
    else if(whichOperator=='-'){
        prevNum-=ipt;
    }
    else{
        prevNum=ipt;
    }
    inputBar.select();
}
resetButton.addEventListener('click',(event) => {
    resultsBar.value="";
    inputBar.value = "";
    prevNum = 0;
});