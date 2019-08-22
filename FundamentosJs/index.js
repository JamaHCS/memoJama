diasEntreFechas = (fecha1, fecha2) => {
    const unDia = 1000 * 60 * 60 * 24
    const diferencia = Math.abs(fecha1 - fecha2)

    return diferencia / unDia
}

const hoy = new Date()
console.log(`Fecha actual: ${hoy}`)

const nacimiento = new Date(2000, 2, 20)
console.log(`Mi fecha de nacimiento: ${nacimiento}`)

const diasVividos = diasEntreFechas(hoy, nacimiento)
console.log(`Días vividos: ${diasVividos}`)

console.log(`Años exactos: ${diasVividos / 365}`)