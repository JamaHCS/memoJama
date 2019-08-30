const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ultimoNivel = 20


class Juego {
    constructor() {
        this.inicializar()
        this.generarSecuencia()
        setTimeout(() => {
            this.siguienteNivel()
        }, 500)
    }

    inicializar() {
        this.siguienteNivel = this.siguienteNivel.bind(this)
        this.elegirColor = this.elegirColor.bind(this)
        this.toggleBtnEmpezar()
        this.nivel = 1
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }
    
toggleBtnEmpezar(){
    if(btnEmpezar.classList.contains('hide')){
        btnEmpezar.classList.remove('hide')
    }else{
        btnEmpezar.classList.add('hide')
    }
}

    generarSecuencia() {
        this.secuencia = new Array(ultimoNivel).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    siguienteNivel() {
        this.subNivel = 0
        this.iluminarSecuencia()
        this.agregarClick()
    }

    tranformarNumeroColor(numero) {
        switch (numero) {
            case 0:
                return 'celeste'
            case 1:
                return 'naranja'
            case 2:
                return 'violeta'
            case 3:
                return 'verde'
        }
    }

    transformarColorNumero(color) {
        switch (color) {
            case 'celeste':
                return 0
            case 'naranja':
                return 1
            case 'violeta':
                return 2
            case 'verde':
                return 3
        }
    }

    iluminarSecuencia() {
        for (let i = 0; i < this.nivel; i++) {
            const color = this.tranformarNumeroColor(this.secuencia[i])
            setTimeout(() => this.iluminarColor(color), 850 * i)
        }
    }

    iluminarColor(color) {
        this.colores[color].classList.add('light')
        setTimeout(() => this.apagarColor(color), 350)
    }

    apagarColor(color) {
        this.colores[color].classList.remove('light')
    }

    agregarClick(){
        this.colores.celeste.addEventListener('click', this.elegirColor)
        this.colores.verde.addEventListener('click', this.elegirColor)
        this.colores.violeta.addEventListener('click', this.elegirColor)
        this.colores.naranja.addEventListener('click', this.elegirColor)
    }

    eliminarClick(){
        this.colores.celeste.removeEventListener('click', this.elegirColor)
        this.colores.verde.removeEventListener('click', this.elegirColor)
        this.colores.violeta.removeEventListener('click', this.elegirColor)
        this.colores.naranja.removeEventListener('click', this.elegirColor)
    }

    elegirColor(ev){
        const nombreColor = ev.target.dataset.color
        const numerocolor = this.transformarColorNumero(nombreColor)
        this.iluminarColor(nombreColor)
        if(numerocolor === this.secuencia[this.subNivel]){
            this.subNivel++
            if(this.subNivel === this.nivel){
                this.nivel++
                this.eliminarClick
                if(this.nivel === (ultimoNivel + 1)){
                    this.gano()
                } else{
                    setTimeout(this.siguienteNivel, 1300)
                }
            }
        }else{
            this.perdio()
        }
    }

    gano(){
        swal('MemoJama','Ganaste!!','success')
            .then(()=> {
                this.inicializar()
            })
    }

    perdio(){
        swal('MemoJama','Perro tonto, perdiste.','error')
            .then(()=> {
                this.eliminarClick()
                this.inicializar()
            })
    }


}


function empezarJuego() {
    window.juego = new Juego()
}

//Bug. El pedo está en que la secuencia solo se va expandiendo y no es random con cada iteracion