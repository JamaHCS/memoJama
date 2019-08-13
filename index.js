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

function imprimirMayorEdad (persona)
{
    
}


imprimirFunciones(jama)

