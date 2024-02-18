
var addButton = document.getElementById('añadirElemento');


addButton.addEventListener('click', function() {
  
  var lista = document.getElementById('lista');
  var nuevoElemento = document.createElement('li');
  nuevoElemento.className = 'list-group-item';
  nuevoElemento.textContent = 'Elemento ' + (lista.children.length + 1);

  
  lista.appendChild(nuevoElemento);
});