var hector = {
    nombre: 'Héctor',
    apellido: 'Escobedo',
    edad: 19,
    libros: 45,
    estatura:1.8
}

var jama = {
    nombre: 'Jama',
    apellido: 'Ideal',
    edad: 35,
    estatura: 1.78
}

var dulce = {
    nombre: 'Dulce',
    apellido: 'Reyes',
    edad: 16,
    libros: 91,
    estatura: 1.60
}

var ninja = {
    nombre: 'Misael',
    apellido: 'Tapia',
    edad: 22,
    libros: 15,
    estatura: 1.82
}

var psicosis = {
    nombre: 'Aldito',
    apellido: 'García',
    edad: 23,
    libros: 42,
    estatura: 1.60
}

var lalo = {
    nombre: 'Eduardo',
    apellido: 'Hernandez',
    edad: 21,
    estatura: 1.70,
    libros:74,
}
const esAlta = ({estatura}) => estatura > 1.70

var personas = [
    hector,
    jama,
    dulce,
    ninja,
    psicosis,
    lalo
]

var personasAltas = personas.filter(esAlta)

const pasarAltura = persona => {
    return {
        ...persona,
        estatura: persona.estatura * 100
    }
}

var personasCms = personas.map(pasarAltura)



// console.log(personasCms)

