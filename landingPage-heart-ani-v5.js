const heartTextDiv = document.getElementById("heart-text-div");

var heartDivLeft = heartTextDiv.getBoundingClientRect().left;
var heartDivBottom = heartTextDiv.getBoundingClientRect().bottom + document.documentElement.scrollTop;

console.log(heartDivLeft, heartDivBottom);