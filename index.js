var jama = {
    nombre: 'Héctor',
    apellido: 'Escobedo',
    edad: 19,
    nickname: 'Jama Ideal',
    peso: 65,
}
var dias = 0
const derivadaPeso = 0.300
const comeMucho = () => Math.random() < 0.3
const deporte = () => Math.random() < 0.4

function inicio(persona)
{

    const aumentaDePeso = persona => persona.peso += derivadaPeso
    const adelgazar = persona => persona.peso -= derivadaPeso
    const meta = persona.peso - 3
    console.log(`Al inicio del año, ${persona.nombre}, pesaba ${persona.peso.toFixed(1)} Kg.`)

    for(var i = 1; i <= 365; i++)
    {
        var random = Math.random()
        if(random < 0.25)
        {
            aumentaDePeso(persona)
        }
        else if (random < 0.5)
        {
            adelgazar(persona)
        }
    }

    while (persona.peso > meta)
    {
        if(comeMucho())
        {
            aumentaDePeso()
        }
        if(deporte)
        {
            adelgazar()
        }
        dias++
    }


    console.log(`pasaron ${dias} dias hasta que ${persona.nombre} adelgazó 3 Kg.`)
}
