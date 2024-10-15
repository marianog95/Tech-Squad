const enlaceNuestraEmpresa = document.querySelector('.enlace1'); // selecciona el enlace "Nuestra empresa"
const seccionNuestraEmpresa = document.getElementById('about'); // selecciona la sección "Nuestra empresa"

enlaceNuestraEmpresa.addEventListener('click', evento => {
  evento.preventDefault();
  seccionNuestraEmpresa.scrollIntoView({ behavior: 'smooth' });
});