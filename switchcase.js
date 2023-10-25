let fruta = "pera"

switch (fruta){
    case "laranja":
    case "maracuja":
        console.log("Suco de " + fruta)
        if(fruta === "maracuja"){
            console.log(fruta + " é bom para dormir o dia todo")
        }else if(fruta === "laranja"){
            console.log(fruta + " é uma delicia!")
        }
        break

        case "banana":
        case "morango":
            console.log("vitamina de " + fruta)
            if(fruta === "banana"){
            console.log("É bom para o estomago!")
            }else if(fruta === "morango"){
                console.log(fruta + " e bom para licor!")
            }
            break
            
            case "maça":
            case "pera":
                console.log("Torta de " + fruta)
                if(fruta === "maça"){
                console.log(fruta + "É a melhor torta que tem!")
                }else if(fruta === "pera"){
                    console.log(fruta + " e ótimo tambem :)")
                }
                break

                case "alface":
                case "xuxu":
                    console.log("Alface" + fruta +  "para salada!")
                    if(fruta === "Alface"){
                        console.log("")
                    }

                default:
                    console.log("Isso e de fazer suco? ou torta?")
}
