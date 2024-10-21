const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula'); 
const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// flecha derecha
flechaDerecha.addEventListener('click', () =>{
    fila.scrollLeft += fila.offsetWidth;
    const indicadorActivo = document.querySelector('.indicadores .active')
    if (indicadorActivo.nextSibling) {
        indicadorActivo.nextElementSibling.classList.add('active');
        indicadorActivo.classList.remove('active');
    }
} );
// flecha izquierda
flechaIzquierda.addEventListener('click', () =>{
    fila.scrollLeft -= fila.offsetWidth;
    const indicadorActivo = document.querySelector('.indicadores .active')
    if (indicadorActivo.previousSibling) {
        indicadorActivo.previousSibling.classList.add('active');
        indicadorActivo.classList.remove('active');
    }
} )
//  Paginacion
const numeroPaginas = Math.ceil(peliculas.length /5);
for(let i=0; i<numeroPaginas;i++){
    const indicador = document.createElement('button');
    if (i === 0) {
        indicador.classList.add('active');
    }
    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) =>{
        fila.scrollLeft = i * fila.offsetWidth;
        document.querySelector('.indicadores .active').classList.remove('active');
        e.target.classList.add('active');
    });
}
 
//   hover
peliculas.forEach((pelicula) =>{
    pelicula.addEventListener('mouseenter',(e) => {
        const elemento = e.currentTarget;
        setTimeout(() =>{

            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    })
})

function toggleTexto() {
    const texto = document.querySelector('.texto');
    texto.classList.toggle('expanded');

    const tresPuntos = texto.querySelector('.tres-puntos');
    if (texto.classList.contains('expanded')) {
        tresPuntos.textContent = '... Mostrar menos'; // Cambia el texto al expandir
    } else {
        tresPuntos.textContent = '... Mostrar más'; // Cambia el texto al colapsar
    }
}

// Muestra los tres puntos inicialmente
function toggleTexto() {
    const texto = document.querySelector('.texto');
    texto.classList.toggle('expanded');

    const tresPuntos = texto.querySelector('.tres-puntos');
    if (texto.classList.contains('expanded')) {
        tresPuntos.textContent = '... Mostrar menos'; // Cambia el texto al expandir
    } else {
        tresPuntos.textContent = '... Mostrar más'; // Cambia el texto al colapsar
    }
}


