const textArea = document.querySelector(".textarea"); //Almacena lo que el usuario esta escribiendo
const mensaje = document.querySelector(".mensaje__content");
const imagen = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

//Funcion para el boton de encriptar
function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    imagen.style.backgroundImage = "none";
    ocultarRectangulo(); //oculta '.rectangulo__texto'
    verBoton();
    mostrarBotonCopiar();
}
//Funcion de encriptación
function encriptar(stringEncriptado) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);

        }
    }
    return stringEncriptado;
}
//console.table(matrizCodigo); muestra el arreglo en la consola

//Funcion para el boton de desencriptar
function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    imagen.style.backgroundImage = "none";
    ocultarRectangulo(); //oculta '.rectangulo__texto'
    verBoton();
    mostrarBotonCopiar();
}
//Funcion de desencriptación
function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);

        }
    }
    return stringDesencriptado;
}

//ocultar .rectangulo__texto sin que el boton copiar se oculte tambien
function ocultarRectangulo(){
    const rectanguloTexto = document.querySelector(".rectangulo__texto");
    const botonCopiar = document.querySelector(".copiar");

    if (rectanguloTexto && botonCopiar) {
        // Ocultar el h2 y el p dentro del contenedor .rectangulo__texto
        rectanguloTexto.querySelector(".titulo").style.display = "none";
        rectanguloTexto.querySelector(".texto").style.display = "none";

        //Establece el background-color a transparent
        rectanguloTexto.style.backgroundColor = "transparent";

        // Muestra el botón .copiar
        botonCopiar.style.display = "block";
    }
}

// Función para copiar el texto del textarea
function copiarTexto() {
    // Obtiene el elemento textarea con la clase 'mensaje'
    const textoArea = document.querySelector(".mensaje__content");

    // Selecciona el contenido del textarea
    textoArea.select();
    textoArea.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el contenido seleccionado al portapapeles
    navigator.clipboard.writeText(textoArea.value)
        .then(() => {
            alert("Texto copiado: " + textoArea.value); // Mensaje opcional para confirmar la copia
        })
        .catch((err) => {
            console.error("Error al copiar el texto: ", err);
        });
}

// Asigna el evento click al botón copiar
const botonCopiar = document.querySelector(".copiar");
botonCopiar.addEventListener("click", copiarTexto);

//Asegura que el textarea del .rectangulo se vacíe al recargar la página
window.addEventListener("load", function() {
    const textoArea = document.querySelector(".mensaje__content");
    textoArea.value = "";
});

// Oculta el botón "Copiar" cuando la página se carga
window.addEventListener("DOMContentLoaded", function() {
    const botonCopiar = document.querySelector(".copiar");
    botonCopiar.style.display = "none"; // Oculta el botón "Copiar" al cargar la página
    
    // Limpia el contenido del textarea al cargar la página
    const textoArea = document.querySelector(".mensaje__content");
    textoArea.value = "";
});

// Función para mostrar el botón "Copiar"
function mostrarBotonCopiar() {
    const botonCopiar = document.querySelector(".copiar");
    botonCopiar.style.display = "block"; // Muestra el botón "Copiar"
}


