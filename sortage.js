//import {PythonShell} from 'python-shell'

//let {PythonShell} = require('python-shell')

//import {PythonShell} from 'python-shell';

//var x = require('python-shell');

let {PythonShell} = require('python-shell')

PythonShell.runString('x=1+2;print(x)',null,function(err){
    if(err) throw err;
    console.log('finished1');
});

PythonShell.run('age_sorter1.py',null,function(err, results){
    if(err) throw err;
    console.log('finished2', results);
});