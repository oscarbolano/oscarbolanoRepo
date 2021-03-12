/**
 * Calcular la edad a partir de la fecha de nacimiento
 */
function calcularEdad(fecha) {
    let hoy = new Date();
    let fechaNac = new Date(fecha);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    let mes = hoy.getMonth() - fechaNac.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }
    return edad;
}
console.log(calcularEdad("10/12/1992")+" años");

