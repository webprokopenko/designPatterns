//Callback sync style
function add(a,b, callback){
    callback(a+b);
}
console.log('before');
add(1,2, result=>console.log('Result: ' + result));
console.log('after');
//Callback async style
function additionAsync(a,b, callback){
    setTimeout(()=>callback(a+b),100);
}
console.log('before async');
additionAsync(1,2, function(result){
    console.log('Result: ' + result)
});
console.log('after async');