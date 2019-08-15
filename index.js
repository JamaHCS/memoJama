class Persona {
    constructor(nombre, apellido, altura) {
        this.nombres = nombre
        this.apellidos = apellido
        this.alturas = altura
    }
    saludar(fn){
        console.log(`Hola, me llamo ${this.nombres}`)
        if(fn){
            fn(this.nombres)
        }
    }
    soyAlto(){
        return this.alturas >= 1.8

    }
}
class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar(fn){
        console.log(`Hola, me llamo ${this.nombres} y soy desarrollador`)
        if (fn) {
            fn(this.nombres, true)
        }
    }
}

function responderSaludo (nombre, esDev) {
    console.log(`Buen dia, ${nombre}`)
    if(esDev){
        console.log(`ah, mira, no sabía que eras dev`)
    }
}


var jama = new Desarrollador('Jama', 'Ideal', 1.8)
var dulce = new Persona('Dulce', 'Reyes', 1.60)


jama.saludar(responderSaludo)
dulce.saludar(responderSaludo)