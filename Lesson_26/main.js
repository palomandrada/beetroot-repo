// Calculator 

const display = document.getElementById("display");

function show(input){
    display.value += input;
}

function clear() {
    display.value = "";
}

function calculate() {
    try{
        display.value = eval (display.value)
        //The eval() function in JavaScript can be used to evaluate mathematical expressions written as strings. 

    }
    catch (error){
        display.value = "Error";
    }
}

