var today = new Date();
var curHr = today.getHours();
var timeOutput;

if(curHr < 12){
    timeOutput = 'Good morning,';
}else if(curHr < 18){
    timeOutput = 'Good afternoon,';
}else{
    timeOutput = 'Good evening,'
}

var typed = new Typed(".typedjs-simple", {
    strings:[timeOutput],
typeSpeed: 100,

});
