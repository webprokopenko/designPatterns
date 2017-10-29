const EventEmitter = require('events').EventEmitter;
function helloEvents(){
    const eventEmitter = new EventEmitter();
    setTimeout(()=>eventEmitter.emit('hello', 'hello world from events'),3000);
    return eventEmitter;
};
helloEvents().on('hello',str=>console.log(str));

function helloCallback(callback){
    setTimeout(() => callback('hello world from callback'), 3000);
}
helloCallback(str=>console.log(str));