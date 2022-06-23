function addition(num1, num2){
let add = num1 + num2;
return add;};

function subtraction(num1, num2){
let subtract = num1 - num2;
return subtract;};

function multiplication(num1, num2){
let multiply = num1 * num2;
return multiply;};

function division(num1, num2){
let divide = num1 / num2;
return divide;};

// select operator
const operator = prompt('Enter operator ( either +, -, * or / ): ');

//enter numbers

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

if (operator == '+') {
    console.log(`${number1} ${operator} ${number2} = ${addition(number1, number2)}`);
}

else if (operator == '-') {
    console.log(`${number1} ${operator} ${number2} = ${subtraction(number1, number2)}`);
}
else if (operator == '*') {
    console.log(`${number1} ${operator} ${number2} = ${multiplication(number1, number2)}`);
}
else if (operator == '/') {
    console.log(`${number1} ${operator} ${number2} = ${division(number1, number2)}`);
}