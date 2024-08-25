// Función para encriptar texto
function encriptarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Función para desencriptar texto
function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Asignar funcionalidad a los botones
document.getElementById('encriptar').addEventListener('click', function() {
    const inputTexto = document.querySelector('input[type="text"]');
    const textoEncriptado = encriptarTexto(inputTexto.value);
    
    // Ocultar la imagen y el h2
    document.querySelector('.rectangulo img').style.display = 'none';
    document.querySelector('.rectangulo h2').style.display = 'none';
    
    // Mostrar el texto encriptado en el párrafo
    const parrafo = document.querySelector('.rectangulo p');
    parrafo.textContent = textoEncriptado;
    parrafo.style.display = 'block'; // Asegurar que el párrafo esté visible
});

document.getElementById('desencriptar').addEventListener('click', function() {
    const inputTexto = document.querySelector('input[type="text"]');
    const textoDesencriptado = desencriptarTexto(inputTexto.value);
    
    // Mostrar el texto desencriptado en el párrafo
    const parrafo = document.querySelector('.rectangulo p');
    parrafo.textContent = textoDesencriptado;
    parrafo.style.display = 'block'; // Asegurar que el párrafo esté visible
});
