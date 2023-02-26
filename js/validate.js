let InputCorreo = document.getElementById("InputCorreo");
let AlertEscritura = document.getElementById("AlertEscritura");
let emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let btnEnviar = document.getElementById("btnEnviar");
let InputNombre = document.getElementById("InputNombre");
let InputAsunto = document.getElementById("InputAsunto");
let InputComentario = document.getElementById("InputComentario");
let alertSuccess = document.getElementById("alert-success");
let idTimeout;
let validos = 0;
let validacion = false;

btnEnviar.addEventListener("click", function (event) {
  event.preventDefault();
  AlertEscritura.style.display = "none";
  if (InputNombre.value.length < 3) {
    AlertEscritura.innerHTML = "Tu nombre no es válido.";
    AlertEscritura.style.display = "block";
    InputNombre.focus();
    InputNombre.select();
    InputNombre.style.border = "solid red 2px";
    validacion = false;
  } else {
    InputNombre.style.border = "solid green 2px";
    validacion = true;
    validos++;
  } // else

  if (InputCorreo.value.match(emailRegex) == null) {
    AlertEscritura.style.display = "block";
    AlertEscritura.innerHTML += "<br/>Tu correo electrónico no es válido.";
    InputCorreo.style.border = "solid red 2px";
    validacion = false;
  } // if
  else {
    InputCorreo.style.border = "solid green 2px";
    validos++;
    validacion = true;
  } // else

  if (InputAsunto.value.trim().length < 2) {
    AlertEscritura.style.display = "block";
    AlertEscritura.innerHTML +=
      "<br/>Su asunto no es valido";
    InputAsunto.style.border = "solid red 2px";
    validacion = false;
  } else {
    InputAsunto.style.border = "solid green 2px";
    validos++;
    validacion = true;
  } // else

  if (InputComentario.value.trim().length < 5) {
    AlertEscritura.innerHTML +=
      "<br/>Tu mensaje debe de contener 5 caracteres o más";
    AlertEscritura.style.display = "block";
    InputComentario.focus();
    InputComentario.select();
    InputComentario.style.border = "solid red 2px";
    validacion = false;
  } //if
  else {
    InputComentario.style.border = "solid green 2px";
    validos++;
    validacion = true;
  } //else
  setTimeout(function () {
    InputCorreo.style.border = "";
    InputNombre.style.border = "";
    InputAsunto.style.border = "";
    InputComentario.style.border = "";
    AlertEscritura.style.display = "none";
  }, 1000);

  if (validacion) {
    console.log(InputCorreo.value);
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "alexpediaz1@gmail.com",
      Password: "F3965A2A0554083910CF6E07B76CC858C39D",
      To: "alexpediaz1@gmail.com",
      From: "alexpediaz1@gmail.com",
      Subject: "Alexis Pérez",
      Body: ` ${InputNombre.value} quiere ponerse en contacto.
            Su correo es: ${InputCorreo.value}.
            Su Asunto es: ${InputAsunto.value}.
            Su comentario es:  ${InputComentario.value} `,
    }).then((message /* alert(message) */) =>
    Swal.fire({
        title: '¡Tus datos han sido recibidos, pronto me pondre en contacto contigo!',
        icon: 'success',
        confirmButtonClass: 'custom-confirm-button-class',
      })  
      
    ); //then
    setTimeout(function () {
      InputCorreo.style.border = "";
      InputNombre.style.border = "";
      InputAsunto.style.border = "";
      InputComentario.style.border = "";
      InputCorreo.value = "";
      InputNombre.value = "";
      InputAsunto.value = "";
      InputComentario.value = "";
      /*  alertSuccess.innerHTML = "Su mensaje fue enviado con éxito ";
            alertSuccess.style.display = 'block'; */
    }, 2000);
  } //==4
}); //Email send




// Selecciona todos los enlaces de navegación con la clase "scrollto"
var links = document.querySelectorAll('.scrollto');

// Agrega un manejador de eventos de clic a cada enlace
links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();

    // Obtiene el ID de la sección correspondiente a través del atributo "href"
    var href = this.getAttribute('href');
    var section = document.querySelector(href);

    // Obtiene la posición de la sección en la página
    var position = section.offsetTop;

    // Desplaza suavemente la página a la sección correspondiente
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  });
});


const heroContainer = document.querySelector('.hero-container');
const typedSpan = heroContainer.querySelector('.typed');

typedSpan.setAttribute('data-typed-items', 'Programador Java Full Stack Jr., Analista de Datos Jr., apasionado por la programación');

