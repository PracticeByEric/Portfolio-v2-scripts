// Grid remove tranform class when on click
const cardGrid2 = document.getElementById('card-column-2');
// hover rise card
cardGrid2.addEventListener('mouseenter', (e)=>{
  cardGrid2.classList.toggle('active')
  // cardGrid2.classList.toggle('rise')
})
cardGrid2.addEventListener('mouseleave', (e)=>{
  cardGrid2.classList.remove('rise');
})
// click remove rise
cardGrid2.addEventListener('click', (e)=>{
  cardGrid2.classList.remove('rise');
})

// Click to open project card 2
const card2Open = document.getElementById('projectCard-2');
const card2Opened = document.getElementById('projectCard-2-open');
  card2Open.addEventListener('click', (e) => {
  	card2Open.classList.toggle("open-card-2");
    // print click signify click
    // card2Open.log("clicked");
    if(card2Opened.classList.contains('close-card-2')){
      card2Opened.classList.remove('close-card-2');
    }
    else{
      console.log("Nothing to remove");
    }
  })

// Click to remove animation class from project card 2
const card2CloseButton = document.getElementById('projectCard-2-close-icon');
  card2CloseButton.addEventListener('click', (e) => {
    // console.log("animation removal");
    card2Open.classList.remove('open-card-2');
    card2Opened.classList.toggle('close-card-2');
  })

  // Click to open project card 3
  const card3Open = document.getElementById('projectCard-3');
  const card3Opened = document.getElementById('projectCard-3-open');
  card3Open.addEventListener('click', (e) => {
  	card3Open.classList.toggle("open-card-3");
    // card3Open.log("clicked");
    if(card3Opened.classList.contains('close-card-3')){
      card3Opened.classList.remove('close-card-3');
    }
    else{
      console.log("Nothing to remove");
    }
  })

  // Click to remove animation class from project card 3
const card3CloseButton = document.getElementById('projectCard-3-close-icon');
card3CloseButton.addEventListener('click', (e) => {
  // console.log("animation removal");
  card3Open.classList.remove('open-card-3');
  card3Opened.classList.toggle('close-card-3');
})

  // click to open project card 4
  const card4Open = document.getElementById('projectCard-4');
  const card4Opened = document.getElementById('projectCard-4-open');
  card4Open.addEventListener('click', (e) => {
  	card4Open.classList.toggle("open-card-4");
    // card4Open.log("clicked");
    if(card4Opened.classList.contains('close-card-4')){
      card4Opened.classList.remove('close-card-4');
    }
    else{
      console.log("Nothing to remove");
    }
  })

    // Click to remove animation class from project card 4
const card4CloseButton = document.getElementById('projectCard-4-close-icon');
card4CloseButton.addEventListener('click', (e) => {
  // console.log("animation removal");
  card4Open.classList.remove('open-card-4');
  card4Opened.classList.toggle('close-card-4');
})
  
  // click to open project card 5
  const card5Open = document.getElementById('projectCard-5');
  const card5Opened = document.getElementById('projectCard-5-open');
  card5Open.addEventListener('click', (e) => {
  	card5Open.classList.toggle("open-card-5");
    // card5Open.log("clicked");
    if(card5Opened.classList.contains('close-card-5')){
      card5Opened.classList.remove('close-card-5');
    }
    else{
      console.log("Nothing to remove");
    }
  })

    // Click to remove animation class from project card 5
const card5CloseButton = document.getElementById('projectCard-5-close-icon');
card5CloseButton.addEventListener('click', (e) => {
  // console.log("animation removal");
  card5Open.classList.remove('open-card-5');
  card5Opened.classList.toggle('close-card-5');
})