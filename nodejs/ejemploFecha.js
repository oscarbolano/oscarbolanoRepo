let edad;
function calcularEdad(fecha) {
    let hoy = new Date();
    let fechaNac = new Date(fecha);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    let m = hoy.getMonth() - fechaNac.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }
    return edad;
}
console.log(calcularEdad("10/12/1992")+" años");

