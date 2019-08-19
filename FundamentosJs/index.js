const URL = 'https://swapi.co/api'
const PEOPLE_URL = '/people/:id'

const getCharacter = (id) => new Promise((resolve, rejected) => {
    fetch(`${URL}${PEOPLE_URL.replace(':id', id)}`)
        .then((response) => resolve(response.json()))
        .catch(() => rejected(id))
})

const onError = (id) => {
    console.log(`Hubo un error con el personaje ${id}`)
}

async function obtenerPErsonajes(){
    var ids = [1,2,3,4,5,6,7]
    var promesas = ids.map(id => getCharacter(id))
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    }
    catch (id){
        onError(id)
    }
}


obtenerPErsonajes()

//getCharacter(1).then((character) => {
//    console.log(`Hola, yo soy ${character.name}`)
//})
//.catch(onError)