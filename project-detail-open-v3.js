// Click button to open layer 3
const card2Button = document.getElementById("card-2-open-button");
const project2Detail = document.getElementById("test-project-1-scrolling-div");
// get project card layer 3
const project2CardLayer3 = document.getElementById("project-card-layer-3");
// get project card layer 2
const project2CardLayer2 = document.getElementById("projectCard-2-open");

// card 2 button to open project 2 detail
card2Button.addEventListener("click", function(){
    // display project detail page with flex layout
    project2Detail.style.display = "flex";
    // display project card layer 3
    project2CardLayer3.style.display = "flex";
    // add card to banner tag to project 2 card layer 3
    project2CardLayer3.classList.toggle("card-to-banner");
    // hide project card on layer 2
    project2CardLayer2.style.display = "none";
})