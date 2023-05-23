const fs = require('fs'); ///import the module fs

fs.readFile( //readfile of module fs
    'file.txt',// the file name
    'utf8',// the format  name
    (err,data)=>{ //to check if any error is caought, and then
        if(err){
            console.error(err); //display the error
            return; //just return stop program ,if error is encounter
        }
        console.log(data); //display the data
    }
)