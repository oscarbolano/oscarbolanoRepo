/**
 * Ejercicio para poner en practica la libreria y modulos JavaScript
 * 
 * Venta por internet, con login.
 */
let mapRoles = new Map();
mapRoles.set(1, { nombre: "Administrador", descripcion: "Es un super tiene acceso a todo" });
mapRoles.set(2, { nombre: "Gerente", descripcion: "Tiene control medio puede supervisar" });
mapRoles.set(3, { nombre: "Vendedor", descripcion: "Puede hacer consultas y gnerar facturas" });

let mapUsuarios = new Map();
mapUsuarios.set(1, { nombre: "Pedro", apellido: "Rendon", clave: "12345" });
mapUsuarios.set(2, { nombre: "Alfonso", apellido: "Miranda", clave: "123456" });
mapUsuarios.set(3, { nombre: "Guillermo", apellido: "Perez", clave: "1234567" });

let mapUsuarioRol = new Map();
mapUsuarioRol.set(1, 2);
mapUsuarioRol.set(2, 3);
mapUsuarioRol.set(3, 1);

const modulos = {};
function require(nombreModulo) {
    return modulos[nombreModulo];
}

modulos["validar.js"] = (function () {//
    const exports = {};

    exports.usuario = function (data) {
        let usuario = "";
        let rol = "";
        let existe = false;
        for (let [key, value] of mapUsuarioRol) {
            if (key === data) {
                for (let [key2, value2] of mapUsuarios) {
                    if (key2 === key) {
                        usuario = value2;
                    }
                }
                for (let [key3, value3] of mapRoles) {
                    if (key3 === key) {
                        rol = value3;
                    }
                }
                existe = true;
            }
        }
        let datosRet = [existe, usuario, rol];
        return datosRet;
    }

    return exports;

}());

class LoginError extends Error {
    constructor(tipoError, descripcion, date) {
        super(`${tipoError}: ${descripcion}`);
        this.tipoError = tipoError;
        this.descripcion = descripcion;
        this.date = date;
    }
    get name() {
        return "Usuario invalido";
    }
}

function login(dato) {
    const validar = require("validar.js");
    let datoRet = validar.usuario(dato);
    if (datoRet[0]) {
        return datoRet;
    } else {
        throw new LoginError("Fatal Error", "El usuario no existe", new Date());
    }
}

try {
    let datoRet = login(2);
    console.log(datoRet);
    console.log(`Bienvenido ${datoRet[1].nombre} ${datoRet[1].apellido}`);
    let rol = datoRet[2].nombre;
    if (rol === "Administrador") {
        let menu = "Seleccione una opción: \n" +
            "1. Ingresar producto\n" +
            "2. Sacar producto\n" +
            "3. Venta día\n" +
            "4. Buscar producto\n" +
            "5. Inventario\n" +
            "0. Salir \n";


    } else if (rol === "Gerente") {
        let menu = "Seleccione una opción: \n" +
            "1. Venta día\n" +
            "2. Buscar producto\n" +
            "3. Inventario\n" +
            "0. Salir \n";
            
    }
} catch (error) {
    console.error(error.name);
    console.error(error.date + ": " + error.message);
}





