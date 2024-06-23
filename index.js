document.querySelectorAll('.card-wrapper').forEach(card => {
  card.addEventListener('click', function () {
      card.classList.toggle('flipped');
  });
});
