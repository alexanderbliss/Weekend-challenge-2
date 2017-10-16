$(document).ready(readyNow);

function readyNow(){
    console.log('script  and jquery sourced')
    clicks();
}

function clicks(){
    //click handlers
$('.buttons').on('click', '#add', add );
$('.buttons').on('click', '#subtract', subtract );
$('.buttons').on('click', '#multiply', multiply );
$('.buttons').on('click', '#divide', divide );
$('.buttons').on('click', '#clear', clear );
$('.hardMode').on('click', '#fourteen', fourteen );
$('.hardMode').on('click', '#equals', equals );
$('.hardMode').on('click', '#twelve', twelve );
}
function serverSend(){
    console.log ('click')
    console.log(math);
    var input1 = $('#num1').val();
    var input2 = $('#num2').val();
    
    console.log(input1);
    console.log(input2);
    $.ajax({
        method: 'POST',
        url: '/serverMath',
        data: {mathFunction: math ,input1: input1, input2:input2}
    }).done(function(response){
        getAnswer()
        getHistory()
        console.log('sent numbers POST', response);
    }).fail(function(message){
        console.log('error!',message);
        
    })
}
function getAnswer(){
    $.ajax({
        method: 'GET',
        url: '/result'
    }).done(function(responce){
        console.log(responce);
        $('.result').append('<h1>' + $('#num1').val() + math  + $('#num2').val()  + ' = ' + responce + '</h1>');
        // $('.vid').append('<img src="url" alt="some_text" src="http://38.media.tumblr.com/3508af3210360f73736fc00e825e1237/tumblr_nuab2dvQCb1ruodr3o2_250.gif" >');
        //this append vid dosent work.
    }).fail(function(message){
        console.log(message);
    })

}
function getHistory() {
    $.ajax({
        method: 'GET',
        url: '/history'
    }).done(function (responce) {
        console.log(responce);

    })
}
// function appendHistory(){
//     if(math = 'add'){
//         math = '+'
//     }
// }
var math = ('');
function add(){
    //addition function
    math = ('+');
    serverSend();
console.log('+');
}
function subtract() {
    //subtrack function
    math = ('-');
    serverSend();
console.log('-');
}
function multiply() {
    //multiply function
    math = ('*');
    serverSend();
    
console.log('*');
}
function divide() {
    //divide function
    math = ('/');
    serverSend();
console.log('/');
}
function clear() {
    //clear function
    location.reload();
console.log('clear');
} 


//hard mode functions

function twelve(){
    input1 = 12
    console.log('12')
}   
function fourteen(){
    input2 = 14
    console.log('14');
}
function equals(){
    serverSend();
}