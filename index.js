var jama = {
    nombre: 'Héctor',
    apellido: 'Escobedo',
    edad: 19,
    nickname: 'Jama Ideal',
    ingeniero: false,
    frontendDeveloper: true,
    taekwondoin: true,
    elAmordeTuVida: true,
    cocinero: false,
    guitarrista: false,
    dj: false,
    }

var apolo = {
    nombre: 'Apolo',
    apellido: 'Cagón',
    edad: 1,
    nickname: 'Jama Ideal',
    ingeniero: false,
    frontendDeveloper: true,
    taekwondoin: true,
    elAmordeTuVida: true,
    cocinero: false,
    guitarrista: false,
    dj: false,
}

function imprimirFunciones (persona)
    {
        console.log(`${persona.nickname} es:`)
        if(persona.ingeniero)
        {
            console.log('ingeniero')
        }
        if (persona.cocinero)
        {
            console.log('cocinero')
        }
        if (persona.dj)
        {
            console.log('dj')
        }
        if (persona.elAmordeTuVida)
        {
            console.log('elAmorDeTuVida')
        }
        if (persona.frontendDeveloper)
        {
            console.log('frontendDeveloper')
        }
        if (persona.taekwondoin)
        {
            console.log('taekwondoin')
        }
        if (persona.guitarrista)
        {
            console.log('guitarrista')
        }
}

const MAYORIA_DE_EDAD = 18

// function esMayorDeEdad(persona)
// {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD
const esMenorDeEdad = ({edad}) => edad < MAYORIA_DE_EDAD
function imprimirMayorEdad (persona)
{
    if (esMayorDeEdad(persona))
    {
        console.log(`${persona.nombre} es mayor de edad`)
    }
    else
    {
        console.log(`${persona.nombre} es menor de edad`)
    }

    permitirAcceso(persona)

}

function permitirAcceso(persona)
{
    if(esMenorDeEdad(persona))
    {
        console.log('ACCESS DENIED')
    }
}

//imprimirFunciones(jama)
imprimirMayorEdad(jama)
imprimirMayorEdad(apolo)