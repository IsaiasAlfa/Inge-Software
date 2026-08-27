// Crear variables para capturar los elementos de la página
const btnDistritos = document.getElementById('btn-distritos');
const contenedorDistritos = document.getElementById('contenedor-distritos');
const btnAfterlife = document.getElementById('btn-afterlife');
const modalAfterlife = document.getElementById('modal-afterlife');
const btnCerrar = document.getElementById('cerrar-modal');
const imgElemento = document.getElementById('img-carrusel');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

// Arreglo con las imagenes que se quieren mostrar
const imagenesNightCity = [
  "https://i.pinimg.com/originals/68/07/a1/6807a1a41e32c0b7d4bd88c5cc95d003.jpg",
  "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/11/cyberpunk-2077-night-city.jpg",
  "https://areajugones.sport.es/wp-content/uploads/2018/11/night-city-cyberpunk-2077.jpg.webp"
];

// Sirve para capturar el click del boton y ejecutar una funcion
btnDistritos.addEventListener('click', () => {
  // Alterna la clase 
  contenedorDistritos.classList.toggle('oculto');

  // Cambiar lo que dice un boton al clickearlo
  if (contenedorDistritos.classList.contains('oculto')) {
    btnDistritos.textContent = 'Mostrar Distritos';
  } else {
    btnDistritos.textContent = 'Ocultar Distritos';
  }
});

// Abrir el modal
btnAfterlife.addEventListener('click', () => {
  modalAfterlife.classList.remove('oculto');
});

// Cerrar al hacer clic en la X
btnCerrar.addEventListener('click', () => {
  modalAfterlife.classList.add('oculto');
});

// Cerrar al hacer clic en cualquier parte fuera de la caja del modal
window.addEventListener('click', (evento) => {
  if (evento.target === modalAfterlife) {
    modalAfterlife.classList.add('oculto');
  }
});

// Variable para el carrusel de imágenes
let indiceImagen = 0;

// función principal para mostrar una nueva imagen en el carrusel
function mostrarImagen() {
  imgElemento.src = imagenesNightCity[indiceImagen];
}

// Evento al hacer clic en la flecha derecha
btnNext.addEventListener('click', () => {
  indiceImagen++; // Incrementamos el índice
  
  // Si llegamos al final del arreglo, volvemos al principio (0)
  if (indiceImagen >= imagenesNightCity.length) {
    indiceImagen = 0;
  }
  
  mostrarImagen();
});

// Evento al hacer clic en la flecha izquierda
btnPrev.addEventListener('click', () => {
  indiceImagen--; // Decrementamos el índice
  
  // Si estamos en la primera imagen y presionamos "Anterior", vamos a la última
  if (indiceImagen < 0) {
    indiceImagen = imagenesNightCity.length - 1;
  }
  
  mostrarImagen();
});