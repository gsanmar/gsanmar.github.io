
var toggleLink = document.getElementById('toggleLink');
toggleLink.addEventListener('click', function(event) {
  event.preventDefault();

  var additionalText = document.querySelector('.additional');

  //visibilidad de texto adicional
  if (additionalText.classList.contains('hidden')) {
    additionalText.classList.remove('hidden');
    additionalText.classList.add('visible');
    toggleLink.textContent = 'Ocultar exceso de texto';
  } else {
    additionalText.classList.remove('visible');
    additionalText.classList.add('hidden');
    toggleLink.textContent = 'Seguir leyendo';
  }
});