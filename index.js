class Persona {
    constructor(nombre, apellido, altura) {
        this.nombres = nombre
        this.apellidos = apellido
        this.alturas = altura
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombres}`)
    }
    soyAlto(){
        return this.alturas >= 1.8

    }
}
class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombres} y soy desarrollador`)
    }
}
// var jama = new Desarrollador('Jama', 'Ideal', 1.8)
// var dulce = new Persona('Dulce', 'Reyes', 1.60)
