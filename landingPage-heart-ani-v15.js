const heartTextDiv = document.getElementById("heart-text-div");

const heartSpiralDiv = document.getElementById("test-heart-spiral-div");


var heartDivLeft = heartTextDiv.getBoundingClientRect().left;
var heartDivBottom = heartTextDiv.getBoundingClientRect().bottom;

console.log(document.body.scrollTop);

heartSpiralDiv.style.position = "absolute";
heartSpiralDiv.style.left = heartDivLeft +'px';
heartSpiralDiv.style.top = heartDivBottom + document.body.scrollTop + 'px';