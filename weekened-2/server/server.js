var express= require('express');
var app = express();
var bodyParser= require('body-parser');
// var mathOperator =require('./modules/mathFunctions')
var port= 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
var clientData;
app.post('/serverMath', function(req,res){
    console.log(req.body);
    res.sendStatus(200);
    clientData= req.body;
    // result = mathOperator(req.body);

})
app.get('/result',function(req,res){
    res.send(doMath())

});
function doMath(){
var data = [];
var result =[];

    data.push(clientData.mathFunction)
    data.push(parseInt(clientData.input1));
    data.push(parseInt(clientData.input2));

    for(var i=0; i<data.length; i+=1)

    if (data[0]=== 'add'){
    return result = [data[1]+data[2]];
    }else if (data[0] === 'subtract'){
        return result =[data[1]-data[2]];
    }else if (data[0]=== 'multiply'){
        return result = [data[1] * data[2]];
    } else if(data[0]==='divide'){
        return result = [data[1]/data[2]];

    }


console.log(result);

}

app.listen(port, function() {
    console.log('listening on port ', port);
    
});
