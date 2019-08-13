var jama = {
    nombre: 'Jama',
    apellido: 'Ideal',
    edad: 19,
    nickname: 'Hector',
}

function imprimirNombreUpper ({nombre})
{
    console.log(`El nombre es: ${nombre.toUpperCase()}`)
}

//imprimirNombreUpper (jama)

function printNameAndAge (persona)
{
    console.log
    (
        `Hola, me llamo ${persona.nombre} y tengo ${persona.edad} años`
    )
}

printNameAndAge (jama)

function cumpleaños (persona)
{
    return {
        ...persona,
        edad: persona.edad + 1
    }

}