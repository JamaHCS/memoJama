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

for(var i = 0; i < personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} tiene ${persona.edad} años`)
}