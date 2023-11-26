const heartTextDiv = document.getElementById("heart-text-div");

const heartSpiralDiv = document.getElementById("test-heart-spiral-div");

const pageScrollTop = document.documentElement.scrollTop;

var heartDivLeft = heartTextDiv.getBoundingClientRect().left;
var heartDivBottom = heartTextDiv.getBoundingClientRect().bottom;

console.log(heartDivLeft, heartDivBottom);

heartSpiralDiv.style.position = "absolute";
heartSpiralDiv.style.left = heartDivLeft +'px';
heartSpiralDiv.style.bottom = heartDivBottom +'px';