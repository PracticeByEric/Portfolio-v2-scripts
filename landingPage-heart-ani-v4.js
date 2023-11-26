const heartTextDiv = document.getElementById("heart-text-div");

var heartDivLeft = heartTextDiv.getBoundingClientRect().left;
var heartDivBottom = heartTextDiv.getBoundingClientRect().bottom + window.scrollY;

console.log(heartDivLeft, heartDivBottom);