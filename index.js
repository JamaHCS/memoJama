var hector = {
    nombre: 'Héctor',
    apellido: 'Escobedo',
    edad: 19,
}

var jama = {
    nombre: 'Jama',
    apellido: 'Ideal',
    edad: 19,
}

var dulce = {
    nombre: 'Dulce',
    apellido: 'Reyes',
    edad: 16,
}

var ninja = {
    nombre: 'Misael',
    apellido: 'Tapia',
    edad: 22,
}

var psicosis = {
    nombre: 'Aldito',
    apellido: 'García',
    edad: 23,
}

var lalo = {
    nombre: 'Eduardo',
    apellido: 'Hernandez',
    edad: 21,
}

var personas = [
    hector,
    jama,
    dulce,
    ninja,
    psicosis,
    lalo
]
const old = ({edad}) => edad > 20

var personasViejas = personas.filter(old)
console.log(personasViejas)