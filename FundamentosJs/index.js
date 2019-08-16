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
getCharacter(1).then((character) => {
    console.log(`Hola, yo soy ${character.name}`)
}).catch((id) => {
    onError(id)
})