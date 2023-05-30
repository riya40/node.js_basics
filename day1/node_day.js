const dayofWeek = new Date().getDay();

let message;

switch(dayofWeek){
    case 0:
    message="its sunday"
    break;
    case 1:
    message="its monday"
    break;
    case 2:
    message="its tuesday"
    break;
    case 3:
    message="its wednesday"
    break;
    case 4:
    message="its thursday"
    break;
    case 5:
    message="its friday"
    break;
    case 6:
    message="its saturday"
    break;
    default:
        message="invalid day"
}

console.log(message)