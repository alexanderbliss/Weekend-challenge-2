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
        $('.result').append('<h1>' + responce + '</h1>');
        $('.vid').append('<img>' + "src='url' alt='some_text' src='http://38.media.tumblr.com/3508af3210360f73736fc00e825e1237/tumblr_nuab2dvQCb1ruodr3o2_250.gif'" + '</img>');
    }).fail(function(message){
        console.log(message);
    })

}

var math = ('');
function add(){
    //addition function
    math = ('add');
    serverSend();
console.log('add');
}
function subtract() {
    //subtrack function
    math = ('subtract');
    serverSend();
console.log('subtract');
}
function multiply() {
    //multiply function
    math = ('multiply');
    serverSend();
    
console.log('multiply');
}
function divide() {
    //divide function
    math = ('divide');
    serverSend();
console.log('divide');
}
function clear() {
    //clear function
    location.reload();
console.log('clear');
} 