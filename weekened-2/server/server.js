var express= require('express');
var app = express();
var bodyParser= require('body-parser');
// var mathOperator =require('./modules/mathFunctions')
var port= 5000;
var calcRoutes = require('./routes/calc_routes');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/calc', calcRoutes);
var clientData;

var history = []

function getHistory(){
var data = []
var history = []

    history.push(parseInt(clientData.input1));
    history.push(clientData.mathFunction);
    history.push(parseInt(clientData.input2));
    console.log(history);
    return history;
}
function doMath(){
var data = [];
var result =[];

    data.push(clientData.mathFunction)
    data.push(parseInt(clientData.input1));
    data.push(parseInt(clientData.input2));


    for(var i=0; i<data.length; i+=1){

    if (data[0]=== '+'){
    return result = [data[1]+data[2]];

    }else if (data[0] === '-'){
        return result =[data[1]-data[2]];

    }else if (data[0]=== '*'){
        return result = [data[1] * data[2]];

    } else if(data[0]==='/'){
        return result = [data[1]/data[2]];


    }

    // console.log(result);
    }


}

app.listen(port, function() {
    console.log('listening on port ', port);
    
});
