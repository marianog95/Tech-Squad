var datos = document.getElementsByClassName('input');
for (var i = 0; i < datos.length; i++) {
  datos[i].addEventListener('keyup', function () {
    if (this.value.length >= 1) {
      this.nextElementSibling.classList.add('fijar');
    } else {
      this.nextElementSibling.classList.remove('fijar');
    }
  });
}
const nombre = document.getElementById("firstname")
const apellido = document.getElementById("lastname")
const formulario = document.getElementById("formulario")
const mensaje = document.getElementById("comentario")
const mail = document.getElementById("correo")

formulario.addEventListener("submit", (e) =>{
 e.preventDefault()
 let entrar=false
 let regexEmail=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
 if (nombre.value.length<3){
   alert("nombre no válido");
   entrar= true
 }
 if (apellido.value.length<3){
  alert("apellido no válido")
  entrar= true
 }
 if(!regexEmail.test(mail.value)){
  alert("correo electrónico no válido")
  entrar=true
 }
 if (mensaje.value.length<3){
  alert("por favor escriba un comentario")
  entrar= true
 }

 
  
})


