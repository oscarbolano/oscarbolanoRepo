/**
 * Ejemplo 2: Clase de error para un login
 */
class NumericoError extends Error{
    constructor(tipoError,descripcion,name,date){
        super(`${tipoError}: ${descripcion}`);
        this.tipoError = tipoError;
        this.descripcion = descripcion;
        this.name = name;
        this.date = date;
    }
}
function validateUpdate(valor){
    if(!Number.isInteger(valor)){
        throw new NumericoError("Fatal","Error","El valor no es numerico",new Date());
    }
}
try {
    validateUpdate("1234");
} catch (error) {
    console.error(error.date + ": " + error.name);
    console.error(error.message);
}



/**
 * Ejemplo 3: Clase de error actualizar registro en bd
 */
class LoginError extends Error{
    constructor(tipoError,descripcion){
        super(`${tipoError}: ${descripcion}`);
        this.tipoError = tipoError;
        this.descripcion = descripcion;
    }
    get name(){
        return "Usuario invalido";
    }
}
function validateUpdate(codigo){
    let mapUsuarios = new Map();
    mapUsuarios.set(1,"Usuario 1").set(2,"Usuario 2").set(3,"Usuario 3");
    let existeUsuario = false;
    let nombreUsuario = "";
    for(let [key,value] of mapUsuarios){
        if(key === codigo){
            existeUsuario = true;
            nombreUsuario = value;
        }
    }
    if(!existeUsuario){
        throw new LoginError("Fatal","El usuario no existe");
    }
}
try {
    validateUpdate(4);
} catch (error) {
    console.error(error.name);
    console.error(error.message);
}


