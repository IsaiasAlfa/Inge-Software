// Crear variables para capturar los elementos de la página
const btnDistritos = document.getElementById('btn-distritos');
const contenedorDistritos = document.getElementById('contenedor-distritos');

// Variables para el modal del Afterlife
const btnAfterlife = document.getElementById('btn-afterlife');
const modalAfterlife = document.getElementById('modal-afterlife');
const btnCerrar = document.getElementById('cerrar-modal');

// Variables para el carrusel de imágenes
const imgElemento = document.getElementById('img-carrusel');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

// Variables para creación de tragos
const formTrago = document.getElementById('form-trago');
const inputNombre = document.getElementById('nombre-leyenda');
const selectBase = document.getElementById('base-alcohol');
const inputToque = document.getElementById('toque-especial');
const mensajeExito = document.getElementById('mensaje-exito');

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

formTrago.addEventListener('submit', (evento) => {
  // Evitar que el formulario se envíe y la página se recargue
  evento.preventDefault();

  // Bandera para saber si todo es válido
  let esValido = true;

  // Limpiar mensajes de error previos
  document.querySelectorAll('.error').forEach(span => span.textContent = '');
  mensajeExito.classList.add('oculto');

  // Validación: Nombre de mínimo 3 caracteres
  if (inputNombre.value.trim().length < 3) {
    document.getElementById('error-nombre').textContent = 'El alias debe tener al menos 3 caracteres.';
    esValido = false;
  }

  // Validación: No puede estar vacío el select de base de alcohol
  if (selectBase.value === '') {
    document.getElementById('error-base').textContent = 'Debes elegir una base de alcohol para tu trago.';
    esValido = false;
  }

  // Validación: No puede estar vacío el input de toque especial
  if (inputToque.value.trim() === '') {
    document.getElementById('error-toque').textContent = 'Especifica el toque especial de tu receta.';
    esValido = false;
  }

  // Si todo salió bien, mostrar mensaje de exito y limpiar el formulario
  if (esValido) {
    const nombre = inputNombre.value.trim();
    const base = selectBase.options[selectBase.selectedIndex].text;
    const toque = inputToque.value.trim();

    mensajeExito.textContent = `¡Trago "${nombre}" registrado! Receta: Base de ${base} con ${toque}. Salud en el Afterlife.`;
    mensajeExito.classList.remove('oculto');

    // Limpiar el formulario
    formTrago.reset();
  }
});

// Capturamos todos los botones de los títulos del acordeón
const titulosAcordeon = document.querySelectorAll('.acordeon-titulo');

titulosAcordeon.forEach((titulo) => {
  titulo.addEventListener('click', () => {
    // Obtenemos el elemento padre (.acordeon-item)
    const itemActual = titulo.parentElement;

    // Alternamos la clase .activo en el ítem seleccionado
    itemActual.classList.toggle('activo');
  });
});