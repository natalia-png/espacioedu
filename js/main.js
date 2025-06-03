document.addEventListener('DOMContentLoaded', () => {
  // 1. Obtener elementos del DOM
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.querySelector('.close');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const galleryItems = document.querySelectorAll('.gallery-item img');

  // 2. Crear un arreglo con las rutas de las seis imágenes
  const images = [
    'assets/images/pag0.png',
    'assets/images/pag1.png',
    'assets/images/pag2.png',
    'assets/images/pag3.png',
    'assets/images/pag4.png',
    'assets/images/pag5.png'
  ];

  let currentIndex = 0;

  // 3. Función para abrir el modal con la imagen correspondiente
  function openModal(index) {
    currentIndex = index;
    modalImg.src = images[currentIndex];
    modal.style.display = 'block';
  }

  // 4. Función para cerrar el modal
  function closeModal() {
    modal.style.display = 'none';
  }

  // 5. Funciones de navegación
  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex];
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex];
  }

  // 6. Asignar evento click a cada miniatura
  galleryItems.forEach((img) => {
    img.addEventListener('click', () => {
      const index = parseInt(img.getAttribute('data-index'), 10);
      openModal(index);
    });
  });

  // 7. Eventos para cerrar y navegar
  closeBtn.addEventListener('click', closeModal);
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  // 8. Cerrar modal si se hace clic fuera de la imagen (área oscura)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // 9. Navegación con teclas ← y → y cerrar con Esc
  document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'block') {
      if (e.key === 'ArrowRight') {
        showNext();
      } else if (e.key === 'ArrowLeft') {
        showPrev();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    }
  });
});
