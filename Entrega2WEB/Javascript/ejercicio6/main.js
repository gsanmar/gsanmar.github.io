
var enlaces = document.querySelectorAll('a');


enlaces.forEach(function(enlace) {
  
  enlace.addEventListener('click', function(evento) {
    
    evento.preventDefault();
    
    
    var seccion = enlace.parentNode.querySelector('p');
    
   
    if (seccion.style.display === 'none') {
      seccion.style.display = 'block';
      enlace.textContent = 'Ocultar contenidos';
    } else {
      seccion.style.display = 'none';
      enlace.textContent = 'Mostrar contenidos';
    }
  });
});