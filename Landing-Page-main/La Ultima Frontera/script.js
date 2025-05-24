console.log("Hola mundo :D");

// paso 1: guardo los elementos del form en variables
var input_nombre = document.getElementById("nombre");
var input_email = document.getElementById("email");
var input_submit = document.getElementById("submit");

console.log(input_nombre);
console.log(input_email);
console.log(input_submit);

// paso 2: creo una funcion que se ejecuta cuando envio el form
input_submit.addEventListener("click", enviarForm);

function enviarForm(event){
    event.preventDefault(),

    console.log("he sido clickeado");

    // paso 3: obtener los valores de los inputs
    var valor_nombre = input_nombre.value;
    var valor_email = input_email.value;

    console.log (valor_nombre);
    console.log(valor_email);

    // paso 4: obtener placeholders
    var placeholder_nombre = document.getElementById("nombre-placeholder");
    var placeholder_email = document.getElementById("email-placeholder");

    console.log(placeholder_nombre);
    console.log(placeholder_email);

    // paso 5: cambiar el contenido de los placeholders
    placeholder_nombre.innerHTML = valor_nombre;
    placeholder_email.innerHTML = valor_email;

    // paso 6: mostrar feedback
    var elemento_feedback = document.getElementById("feedback");
    elemento_feedback.classList.remove("oculto");

    // paso 7: ocultar form
    //var elemento_form = document.getElementById("formulario");
    //elemento_form.classList.add("oculto");
}

// ocultar feedback
var icono_cerrar = document.getElementById("icono-cerrar");
console.log(icono_cerrar);
icono_cerrar.addEventListener("click", ocultarFeedback);

function ocultarFeedback(event){
  var elemento_feedback = document.getElementById("feedback");
  elemento_feedback.classList.add("oculto");
}


//Carrusel de videos
const scrollWrapper = document.querySelector('.videos-scroll-wrapper');
const leftBtn = document.querySelector('.carousel-btn.left');
const rightBtn = document.querySelector('.carousel-btn.right');

const scrollAmount = 520;

leftBtn.addEventListener('click', () => {
  scrollWrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
  scrollWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});
