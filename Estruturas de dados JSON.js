//JSON - JavaScrip ObjectNotation
//Chave e valor com o objetivo de transferir dados

let invoice = {
    name: "Madara",
    age: 35,

    jutsus:{
        0:["Katon", 29.90],
        1:["Susanoo", 150.99],
        2:["Mokuton", 299.90],
        3:["Amaterasu", 599.90]
    },
    taxas: "9.50"
}

generateInvoice(invoice)

function  generateInvoice(invoice) {
    console.log(`O ninja é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("-----------------------------------")

    for(let index in invoice.jutsus) {
        let  [jutsusName, jutsusPrice] = invoice.jutsus[index]
        console.log(`- ${jutsusName}: R$ ${jutsusPrice}`)
    }
}