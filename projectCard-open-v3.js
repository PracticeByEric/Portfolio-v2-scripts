// click to open project card 2
const card2Open = document.getElementById('projectCard-2');
  card2Open.addEventListener('click', (e) => {
  	card2Open.classList.toggle("open-card-2");
    card2Open.log("clicked");
  })

  // click to open project card 3
  const card3Open = document.getElementById('projectCard-3');
  card3Open.addEventListener('click', (e) => {
  	card3Open.classList.toggle("open-card-3");
    card3Open.log("clicked");
  })

  // click to open project card 4
  const card4Open = document.getElementById('projectCard-4');
  card4Open.addEventListener('click', (e) => {
  	card4Open.classList.toggle("open-card-4");
    card4Open.log("clicked");
  })