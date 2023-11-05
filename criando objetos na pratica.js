class formaDeBolo {
    constructor(saborDaMassa, saborRecheio, cobertura) {
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
        this.cobertura = cobertura
    }

    escrever() {
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio} e cobertura de ${this.cobertura}`)
    }
    assar(){
        console.log("Bolo assando de " + this.saborDaMassa + " e " + this.saborRecheio)
    }
}

let boloFesta = new formaDeBolo("chocolate", "nutella", " Doce de Leite")
let boloPremium = new formaDeBolo("baunilha", "coco", "Marmelo")
let cobertura = new formaDeBolo("Doce de leite")


boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()

