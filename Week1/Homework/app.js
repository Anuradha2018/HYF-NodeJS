const fs = require('fs'), searchString = "the";
const util = require('util');

const regex = /the /g;

const readFile = util.promisify(fs.readFile);
//let counter = 0;

const promise_file1 = readFile('./file1.txt', 'utf-8');
const promise_file2 = readFile('./file2.txt', 'utf-8');
const promise_file3 = readFile('./file3.txt', 'utf-8');
const promise_file4 = readFile('./file4.txt', 'utf-8');

const start = new Date();
console.log('Start time:', start);

Promise.all([promise_file1, promise_file2, promise_file3, promise_file4]).then((data)=>{
   
    /*
    console.log(data[0].indexOf(searchString)>=0 ? ++counter : "does not have string");
    console.log(data[1].indexOf(searchString)>=0 ? ++counter : "does not have string");
    console.log(data[2].indexOf(searchString)>=0 ? ++counter : "does not have string");
    console.log(data[3].indexOf(searchString)>=0 ? ++counter : "does not have string");

    console.log('The total occurance is :'+ counter);*/

    console.log('The number of times the has occurred in file1 is ' + data[0].match(regex).length);
    console.log('The number of times the has occurred in file2 is ' + data[1].match(regex).length);
    console.log('The number of times the has occurred in file3 is ' + data[2].match(regex).length);
    console.log('The number of times the has occurred in file4 is ' + data[3].match(regex).length);


   


    const end = new Date();
    console.log('End time', end)
    console.log('total time', end- start);
})








