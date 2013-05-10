var fs = require('fs');
var data = null;

//sample reading of file and outputting with callbacks
fs.readFile( 'database.json', 'ascii', function(err, data){
    if(err){
        console.log('Error: ' + err);
    }
    data = JSON.parse(data);
    console.log("inside 'readfile' callback, cannot put 'data' in same line");
    console.log(data);
});

console.log("outside 'readfile' callback, looks like would have to do callback chaining " + data);