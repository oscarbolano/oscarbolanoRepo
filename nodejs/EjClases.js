function Calculadora(valor1, valor2) {
    this.valor1 = valor1;
    this.valor2 = valor2;
}

Calculadora.prototype = {
    sumar: function () {
        return `${this.valor1} + ${this.valor2} = ${this.valor1 + this.valor2}`;
    }
    ,
    restar: function () {
        return `${this.valor1} - ${this.valor2} = ${this.valor1 - this.valor2}`;
    }
    ,
    multiplicar: function () {
        return `${this.valor1} * ${this.valor2} = ${this.valor1 * this.valor2}`;
    }
    ,
    dividir: function () {
        return `${this.valor1} / ${this.valor2} = ${this.valor1 / this.valor2}`;
    }
    ,
    [Symbol.iterator]: function* () {
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    }
};

class FormatoMoneda {
    constructor(valor) {
        this.valor = valor;
    }
    pesoColombiano() {
        const formato = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
          })
        return formato.format(this.valor);
    }
    euro() {
        const formato = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 0
          })
        return formato.format(this.valor);
    }
    dolar() {
        const formato = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
          })
        return formato.format(this.valor);
    }
    yenJapones() {
        const formato = new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'JPY',
            minimumFractionDigits: 0
          })
        return formato.format(this.valor);
    }
}

let calc = new Calculadora(3, 5);
console.log(calc.sumar());
console.log(calc.restar());
console.log(calc.multiplicar());
console.log(calc.dividir());

let formatoMoneda = new FormatoMoneda(10000);
console.log(formatoMoneda.pesoColombiano());
console.log(formatoMoneda.dolar());
console.log(formatoMoneda.euro());
console.log(formatoMoneda.yenJapones());

class conversorMoneda extends FormatoMoneda {
    constructor(valorEnPesoCol, convertirA) {
        if (convertirA === "DOLAR") {
            super(valorEnPesoCol*0.00028);
            this.dolar();
        } else if(convertirA === "EURO"){
            super(valorEnPesoCol*0.00024);
            this.euro();
        } else if(convertirA === "YEN"){
            super(valorEnPesoCol*0.031);
            this.yenJapones();
        }
    }
}
let conversor = new conversorMoneda(10000,"DOLAR");
console.log(conversor.dolar());