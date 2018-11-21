var firstNumber = 0,
secondNumber = 0,
curentNumber = 1;
operation = 0;

function addNumber(number){
if(curentNumber === 1){
    firstNumber += number;
    document.title = +(firstNumber);
}else{
    secondNumber += number;
    document.title = +(secondNumber);
}
}

function addSign(operator){
operation = operator;
curentNumber = 2;
}

function calculate(){
if (operation == "+"){ 
document.title = +(firstNumber) + +(secondNumber);
};
if (operation == "*"){ 
    document.title = +(firstNumber) * +(secondNumber);
};
if (operation == "/"){ 
    document.title = +(firstNumber) / +(secondNumber);
};
if (operation == "-"){ 
    document.title = +(firstNumber) - +(secondNumber);
};
}