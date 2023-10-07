const cardToOpen = document.getElementById('projectCard-2');
  cardToOpen.addEventListener('click', (e) => {
  	cardToOpen.classList.toggle("open-card-2");
    cardToOpen.log("clicked");
  })