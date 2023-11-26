const heartTextDiv = document.getElementById("heart-text-div");
const heartSpiralDiv = document.getElementById("test-heart-spiral-div");

console.log(heartTextDiv.offsetTop);

heartTextDivLeft = heartTextDiv.getBoundingClientRect().left;

heartSpiralDiv.style.position = "absolute";
heartSpiralDiv.style.left = heartTextDivLeft;
heartSpiralDiv.style.top = heartTextDiv.offsetTop;

