$(document).ready(readyNow);

function readyNow(){
    console.log('script  and jquery sourced')
    clicks();
}

function clicks(){
$('.buttons').on('click', '#add', add );
$('.buttons').on('click', '#subtract', subtract );
$('.buttons').on('click', '#multiply', multiply );
$('.buttons').on('click', '#divide', divide );
$('.buttons').on('click', '#clear', clear );
}

function add(){
console.log('add');
}
function subtract() {
console.log('subtract');
}
function multiply() {
console.log('multiply');
}
function divide() {
console.log('divide');
}
function clear() {
console.log('clear');
}
