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
let loginError = new LoginError("Fatal","No existe usuario");
console.log(loginError.name);
console.log(loginError.message);


