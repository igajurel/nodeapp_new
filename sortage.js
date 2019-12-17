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

var age_sorted = [];

var age_sorter_fn = function(input_age_list){
    PythonShell.run('age_sorter.py',{args: input_age_list},function(err, results){
        if(err) throw err;
        age_sorted = results[results.length-1];
        console.log('Sorted Age is:', age_sorted);
        console.log(typeof(JSON.stringify(age_sorted)));
    });
    //return '404040404';
    return age_sorted.toString;
    //return age_sorted;
    //return age_sorted;
};


var age_sorter_fn1 = function(input_age_list){
    PythonShell.run('age_sorter1.py',{args: input_age_list},function(err, results){
        if(err) throw err;
        console.log('ishan here');
        console.log(results);
        //age_sorted = results[results.length-1];
        //console.log('Sorted Age is:', age_sorted);
        //console.log(typeof(age_sorted));
    });
    return [5,8,6]
    //input_age_list;
    //return age_sorted;
};

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
//module.exports = level;
//module.exports = methods;

module.exports = age_sorter_fn;
//module.exports = age_sorter_fn1;