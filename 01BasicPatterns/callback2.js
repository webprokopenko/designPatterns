const fs = require('fs');
function readJSON(filename,callback){
    fs.readFile(filaname,'utf8',function(err,data){
        let parsed;
        if(err){
            //распространение ошибки и выход из текущей функции
            return callback(err);
        }
        //Исключение, перехваченное внутри асинхронного обратного вызова будет
        //передано циклу событий и никогда не достигнет следующего обратного вызова
        try{
            //анализ содержимого файла
            parsed = JSON.parse(data);
        }catch(err){
            //Перехват обрабатываемых ошибок
            return callback(err);
        }
        //Ошибок нет, передаются только данные
        callback(null,parsed);
    })
}