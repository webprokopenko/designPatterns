//Использование синхронного программного интерфейса
const fs = require('fs');
const cache = {};
function consistentReadSync(filename){
    if(cache[filename]){
        return cache[filename];
    } else {
        cache[filename] = fs.readSync(filename,'utf8');
        return cache[filename];
    }
}
//Использование отложенного выполнения
//const fs = require('fs');
//const cache = {};
function consistentReadAsync(filename,callback){
    if(cache[filename])
    {
        process.nextTick(()=>callback(cache[filename]));
    } else {
        fs.readFile(filename,'utf8',(err,data)=>{
            cache[filename] = data;
            callback(data);
        })
    }
}
consistentReadAsync(__filename,(data)=>console.log(data));