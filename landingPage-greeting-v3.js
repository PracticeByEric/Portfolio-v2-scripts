var today = new Date();
var curHr = today.getHours();
var timeOutput;

if(curHr < 12){
    timeOutput = 'Morning,';
}else if(curHr < 18){
    timeOutput = 'Hi there,';
}else{
    timeOutput = 'Hello,'
}

var typed = new Typed(".typedjs-simple", {
    strings:[timeOutput],
    typeSpeed: 100,

});
