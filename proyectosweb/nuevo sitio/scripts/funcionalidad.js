let miImage = document.querySelector('img');
miImage.onclick = function () {
let miSrc = miImage.getAttribute('src');
if (miSrc === 'images/manati.jpg') {
miImage.setAttribute('src','images/manati2.jpg');
} else {
miImage.setAttribute('src', 'images/manati.jpg');
}
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');
function estableceNombreUsuario() {
let miNombre = prompt('Introduzca su nombre.');
if(!miNombre) {
estableceNombreUsuario();
} else {
localStorage.setItem('nombre', miNombre);
miTitulo.innerHTML = 'El manati es un ser vivo como tu, no es asi, ' + miNombre;
}
}
if (!localStorage.getItem('nombre')) {
estableceNombreUsuario();
}
else {
let nombreAlmacenado = localStorage.getItem('nombre');
miTitulo.textContent = 'El manati es un ser vivo como tu, no es asi,' + nombreAlmacenado;
}
miBoton.onclick = function() {
estableceNombreUsuario();
}
