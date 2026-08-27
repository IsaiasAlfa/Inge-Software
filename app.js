// Crear variables para capturar los elementos de la página
const btnDistritos = document.getElementById('btn-distritos');
const contenedorDistritos = document.getElementById('contenedor-distritos');
const btnAfterlife = document.getElementById('btn-afterlife');
const modalAfterlife = document.getElementById('modal-afterlife');
const btnCerrar = document.getElementById('cerrar-modal');

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