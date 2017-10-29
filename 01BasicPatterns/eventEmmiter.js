const EventEmmiter = require('events').EventEmitter;
const fs = require('fs');

function findPattern(files,regex){
    const emitter = new EventEmmiter();
    files.forEach(function(file) {
        fs.readFile(file,'utf8',(err, content)=>{
            if(err)
                return emitter.emit('error',err);
            
            emitter.emit('fileread',file);
            let match;
            if(match = content.match(regex))
                match.forEach(elem=>emitter.emit('found',file,elem));
        });
    });
    return emitter;
};

findPattern([__filename],/function \w+/g)
            .on('fileread',file=>console.log(file+' was read'))
            .on('found',(file,match)=>console.log('Matched '+ match + ' in file '+file))
            .on('error',err=>console.log('Error emitted: ' + err.message));
