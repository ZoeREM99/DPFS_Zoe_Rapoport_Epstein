const generoSelect = document.getElementById('productGenre');
const subgeneroSelect = document.getElementById('productSubGenre');

const subgenerosPorGenero = {
    literature: ['Novela', 'Poesía', 'Teatro', 'Cuento', 'Clásicos', 'Literatura juvenil', 'Literatura infantil'],
    noFiction: ['Historia', 'Biografía', 'Ciencia', 'Filosofía', 'Psicología', 'Autoayuda', 'Libros de cocina'],
    artPhotography: ['Pintura', 'Escultura', 'Fotografía', 'Diseño']
};

generoSelect.addEventListener('change', function() {
    const generoSeleccionado = generoSelect.value;
    const subgeneros = subgenerosPorGenero[generoSeleccionado] || [];

    // Limpiar el select de subgéneros
    subgeneroSelect.innerHTML = '<option value="">Selecciona un subgénero</option>';

    // Llenar el select de subgéneros con las opciones correspondientes
    subgeneros.forEach(subgenero => {
        const option = document.createElement('option');
        option.value = subgenero;
        option.textContent = subgenero;
        subgeneroSelect.appendChild(option);
    });

    // Agregar o quitar el atributo required
    if (subgeneros.length > 0) {
        subgeneroSelect.setAttribute('required', '');
    } else {
        subgeneroSelect.removeAttribute('required');
    }
});

const inputImagen = document.getElementById('productImage');
const pNombreImagen = document.getElementById('productImageName');

inputImagen.addEventListener('change', function() {
    console.log(inputImagen.files[0].name)
  if (inputImagen.files.length > 0) {
    pNombreImagen.setAttribute('style','display:block')
    pNombreImagen.textContent = `${inputImagen.files[0].name}`;
  } else {
    pNombreImagen.setAttribute('style','display:none')
    pNombreImagen.textContent = '';
  }
});