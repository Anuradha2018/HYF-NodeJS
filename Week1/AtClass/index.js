
const fs = require("fs");
const util = require("util");


const readFile =util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const promise_read1 = readFile('file1.txt', 'utf8');
const promise_read2 = readFile('file2.txt', 'utf8');


Promise.all([promise_read1, promise_read2])
.then( data =>{
    console.log(data)
    writeFile("output.txt", data.join("\n"))
});
/*promise.race
promise q*/