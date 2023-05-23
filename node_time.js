const hour = new Date().getHours();

let message;

if(hour < 18){
    message = 'Good Day'
}else{
    message = 'Good Evening'
}
console.log(message)

console.log(`since it is:`,hour,`My message is:`,message)