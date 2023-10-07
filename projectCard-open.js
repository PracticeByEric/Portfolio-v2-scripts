const cardToOpen = document.getElementById('projectCardDiv');
  cardToOpen.addEventListener('click', (e) => {
  	cardToOpen.classList.toggle("test-open-card");
    cardToOpen.log("clicked");
  })