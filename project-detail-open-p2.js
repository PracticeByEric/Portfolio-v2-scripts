// OPEN PROJECT 1 DETAIL
// Get button on project card 2(for project 1)
const card2Button = document.getElementById("card-2-open-button");
// Get project 1 scrolling div
const project1ScrollingDiv = document.getElementById("project1-scrolling-div");

// Get project card 2 on layer 3
const card2Layer3 = document.getElementById("card2-layer3");

// Get project card 2 on layer 2
const card2Layer2 = document.getElementById("projectCard-2-open");

// Get project 1 content detail
const project1Detail = document.getElementById("project1-detail");

// card 2 button to open project 2 detail
card2Button.addEventListener("click", function(){
    // display project detail page with flex layout
    project1ScrollingDiv.style.display = "flex";
    // display project card layer 3
    card2Layer3.style.display = "flex";
    // add card to banner tag to project 2 card layer 3
    card2Layer3.classList.toggle("card-to-banner");
    // hide project card on layer 2
    card2Layer2.style.display = "none";
    // show project 2 detail after few seconds of delay
    setTimeout(() => {
      
        // removes element from DOM
        // show project detail body
        project1Detail.style.display = "flex";
      
        // hides element (still takes up space on page)
        // box.style.visibility = 'hidden';
        // with delay
      }, 750); // time in milliseconds
})

// OPEN PROJECT 2 DETAIL
// Get button on project card 2(for project 1)
const card3Button = document.getElementById("card-3-open-button");
// Get project 1 scrolling div
const project2ScrollingDiv = document.getElementById("project2-scrolling-div");

// Get project card 2 on layer 3
const card3Layer3 = document.getElementById("card3-layer3");

// Get project card 2 on layer 2
const card3Layer2 = document.getElementById("projectCard-3-open");

// Get project 1 content detail
const project2Detail = document.getElementById("project1-detail");

// card 2 button to open project 2 detail
card3Button.addEventListener("click", function(){
    // display project detail page with flex layout
    project2ScrollingDiv.style.display = "flex";
    // display project card layer 3
    card3Layer3.style.display = "flex";
    // add card to banner tag to project 2 card layer 3
    card3Layer3.classList.toggle("card-to-banner");
    // hide project card on layer 2
    card3Layer2.style.display = "none";
    // show project 2 detail after few seconds of delay
    setTimeout(() => {
      
        // removes element from DOM
        // show project detail body
        project2Detail.style.display = "flex";
      
        // hides element (still takes up space on page)
        // box.style.visibility = 'hidden';
        // with delay
      }, 750); // time in milliseconds
})