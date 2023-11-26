const heartTextDiv = document.getElementById("heart-text-div");

const heartSpiralDiv = document.getElementById("test-heart-spiral-div");

const pageScrollTop = window.scrollY;

var heartDivLeft = heartTextDiv.getBoundingClientRect().left;

heartSpiralDiv.style.position = "absolute";
heartSpiralDiv.style.left = heartDivLeft +'px';
heartSpiralDiv.style.top = heartTextDiv.offsetTop + 'px';