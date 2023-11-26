const heartTextDiv = document.getElementById("heart-text-div");

const heartSpiralDiv = document.getElementById("test-heart-spiral-div");


var heartDivLeft = heartTextDiv.getBoundingClientRect().left;
var heartDivBottom = heartTextDiv.getBoundingClientRect().bottom;

heartSpiralDiv.style.position = "absolute";
heartSpiralDiv.style.left = heartDivLeft +'px';
heartSpiralDiv.style.bottom = heartDivBottom + document.body.scrollTop() + 'px';

console.log(document.body.scrollTop());