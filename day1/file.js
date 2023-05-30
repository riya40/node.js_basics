const fs = require('fs'); ///import the module fs
const content = 'this is second line'
fs.writeFile( //writefile of module fs
    'file2.txt',// the file name
    'utf8',// the format  name
    (err,data)=>{ //to check if any error is caought, and then
        if(err){
            console.error(err); //display the error
            return; //just return stop program ,if error is encounter
        }
        console.log('content written in file'); //display the data
    }
);