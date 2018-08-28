const fs = require('fs');

const regex = /the/g;


const start = new Date();
console.log('Start time:', start);

const f1 = fs.readFileSync('file1.txt', 'utf-8');
const f2 = fs.readFileSync('file2.txt', 'utf-8');
const f3 = fs.readFileSync('file3.txt', 'utf-8');
const f4 = fs.readFileSync('file4.txt', 'utf-8');


console.log('The number of times the has occurred in file 1 is ' + f1.match(regex).length);
console.log('The number of times the has occurred in file 2 is ' + f2.match(regex).length);
console.log('The number of times the has occurred in file 3 is ' + f3.match(regex).length);
console.log('The number of times the has occurred in file 4 is ' + f4.match(regex).length);


const end = new Date();
    console.log('End time', end);
    console.log('total time: ', end - start + 'secs' );

/*fs.readFileSync('file1.txt', (err, data)=>{
    console.log('The number of times the has occurred in file1 is ' + data.match(regex).length);

fs.readFileSync('file2.txt',(err, data)=>{
    console.log('The number of times the has occurred in file2 is ' + data.match(regex).length);

fs.readFileSync('file3.txt',(err, data)=>{
    console.log('The number of times the has occurred in file3 is ' + data.match(regex).length);
        
fs.readFileSync('file4.txt',(err, data)=>{
    console.log('The number of times the has occurred in file4 is ' + data.match(regex).length);  
       
    
    
});
});
    
});
});*/




