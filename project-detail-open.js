// Click button to open layer 3
const card2Button = document.getElementById("card-2-open-button");
const project2Detail = document.getElementById("test-project-1-scrolling-div");

// card 2 button to open project 2 detail
card2Button.addEventListener("click", function(){
    project2Detail.style.display = "flex";
})