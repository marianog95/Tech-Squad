/* --pocicion inicial */
let ubicacionPrincipal = window.pageYOffset;
let $div = document.querySelector("div");

/* --evento scroll */
window.addEventListener("scroll", function () {
    /* --muestra la ubicacion cada vez que hagas scroll */
    //console.log(window.pageYOffset);

    let desplazamientoActual = window.pageYOffset;

    if (ubicacionPrincipal >= desplazamientoActual) {
        $div.style.top = "0px";
        console.log('Ubicacion Principal')
        console.log(ubicacionPrincipal)
        console.log('desplazamiento')
        console.log(desplazamientoActual)
    } else {
        $div.style.top = "-80px";
        console.log('Ubicacion Principal')
        console.log(ubicacionPrincipal)
        console.log('desplazamiento')
        console.log(desplazamientoActual)
    }

    ubicacionPrincipal = desplazamientoActual;
});