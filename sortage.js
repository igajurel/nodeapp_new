//import {PythonShell} from 'python-shell'

//let {PythonShell} = require('python-shell')

//import {PythonShell} from 'python-shell';

//var x = require('python-shell');

let {PythonShell} = require('python-shell')

PythonShell.runString('x=1+2;print(x)',null,function(err){
    if(err) throw err;
    //console.log('finished1');
});

PythonShell.run('age_sorter1.py',null,function(err, results){
    if(err) throw err;
    //console.log('finished2', results);
});

PythonShell.run('age_sorter.py',null,function(err, results){
    if(err) throw err;
    console.log('finished3', results);
});

var methods = {
    timestamp: function(){
        console.log('Current Time in Unix timestamp:'+ Math.floor(Date.now()/1000));
    },
    currentDate: function(){
        console.log('Current Date is:'+new Date().toISOString().slice(0,10));
    }
};

//exports.data = methods;

//or also can use below

var level = function(num) {
	return num > 40 ? "It's over 40!" : num;
};
module.exports = level;
//module.exports = methods;