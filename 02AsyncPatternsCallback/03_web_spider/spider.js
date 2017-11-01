const request = require('request');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const utilities = require('./utilities');

function saveFile(filename, contents, callback){
    mkdirp(path.dirname(filename), err=>{
        if(err)
            return callback(err);
        fs.writeFile(filename, contents, callback)
    });
}
function download(url, filename, callback){
    console.log(`Downloading ${url}`);
    request(url, (err, response, body)=>{
        if(err)
            return callback(err);
    
    saveFile(filename, body, err=>{
        if(err)
            return callback(err);
    console.log(`Downloaded and saved: ${url}`);
    callback(null,body);
    });
});
}
function spider(url,callback){
    
};
spider('http://mafiarave.co',(err,downloaded)=>{
    if(err)
        console.log(err);
    else if(downloaded){
        console.log(`Completed the download of`);
    } else {
        console.log(` was already downloaded`);
    }
});