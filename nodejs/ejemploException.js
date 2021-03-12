
/**
 * Ejemplo 2: Clase de error para un login
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

/**
 * Ejemplo 3: Clase de error actualizar registro en bd
 */
class UpdateError extends Error{
    constructor(tipoError,descripcion,name,date){
        super(`${tipoError}: ${descripcion}`);
        this.tipoError = tipoError;
        this.descripcion = descripcion;
        this.name = name;
        this.date = date;
    }
}
let updateError = new UpdateError("Fatal","No se pudo actualizar el registro","Registro erroneo",new Date());
console.log(updateError.name);
console.log(updateError.date +": "+ updateError.message);
