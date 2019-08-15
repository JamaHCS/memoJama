const apiUrl = 'https://swapi.co/api/'

const peopleUrl = 'people/:id'
const lukeUrl = `${apiUrl}${peopleUrl.replace(':id', 1)}`
const op = { crossDomain: true }

function obtenerPersonaje(id){
    const
}

$.get(lukeUrl,op, function(luke){
    console.log(`Hola, yo soy, ${luke.name}`)
})
