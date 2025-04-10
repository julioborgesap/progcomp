function calcular(){
    // declaração variável sem tipo
   let soma = 0

   // recupera o valor da ação social digitado
   let acaoSocial = document.getElementById("acaoSocial").value
   soma = soma + Number(acaoSocial)

   // recupera o valor da homenagem digitado
   let homenagem = document.getElementById("homenagem").value
   soma = soma + Number(homenagem)

   // recupera a qtde de litros de leite
   let leite = document.getElementById("leite").value
   soma = soma + (2 * Number(leite))

   // recupera a qtde de kits 
   let kit = Number(document.getElementById("kit").value)

   // recupera a cor da equipe
   let equipe = document.getElementById("equipe").value

    // recupera a qtde de latas de suplemento
   let suplemento = document.getElementById("suplemento").value
   
   let pontosKitSupl = 0 // guarda pontuação de kit + supl
   if (equipe == "Laranja"){
       // equipe é laranja
       if (kit >= 97 && suplemento >= 49) {
           pontosKitSupl = 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15)
       }
       else if (kit >= 78 && suplemento >= 39) {
           pontosKitSupl = 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15)
       }
       else if (kit >= 49 && suplemento >= 25) {
           pontosKitSupl = 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15)
       }
       else if (kit >= 19 && suplemento >= 10) {
           pontosKitSupl = 1000 + ((kit - 19) * 30) + ((suplemento - 10) * 15)
       }
   }

   if (equipe == "Preta"){
    // equipe é laranja
    if (kit >= 103 && suplemento >= 52) {
        pontosKitSupl = 5000 + ((kit - 103) * 30) + ((suplemento - 52) * 15)
    }
    else if (kit >= 82 && suplemento >= 42) {
        pontosKitSupl = 4000 + ((kit - 82) * 30) + ((suplemento - 42) * 15)
    }
    else if (kit >= 52 && suplemento >= 26) {
        pontosKitSupl = 2500 + ((kit - 52) * 30) + ((suplemento - 26) * 15)
    }
    else if (kit >= 21 && suplemento >= 10) {
        pontosKitSupl = 1000 + ((kit - 21) * 30) + ((suplemento - 10) * 15)
    }
}

if (equipe == "Roxa"){
    // equipe é laranja
    if (kit >= 102 && suplemento >= 51) {
        pontosKitSupl = 5000 + ((kit - 102) * 30) + ((suplemento - 51) * 15)
    }
    else if (kit >= 82 && suplemento >= 41  ) {
        pontosKitSupl = 4000 + ((kit - 82) * 30) + ((suplemento - 41) * 15)
    }
    else if (kit >= 51 && suplemento >= 26) {
        pontosKitSupl = 2500 + ((kit - 51) * 30) + ((suplemento - 26) * 15)
    }
    else if (kit >= 20 && suplemento >= 10) {
        pontosKitSupl = 1000 + ((kit - 20) * 30) + ((suplemento - 10) * 15)
    }
}

if (equipe == "Verde"){
    // equipe é laranja
    if (kit >= 88 && suplemento >= 44) {
        pontosKitSupl = 5000 + ((kit - 88) * 30) + ((suplemento - 44) * 15)
    }
    else if (kit >= 70 && suplemento >= 35  ) {
        pontosKitSupl = 4000 + ((kit - 70) * 30) + ((suplemento - 35) * 15)
    }
    else if (kit >= 44 && suplemento >= 22) {
        pontosKitSupl = 2500 + ((kit - 44) * 30) + ((suplemento - 22) * 15)
    }
    else if (kit >= 18 && suplemento >= 9) {
        pontosKitSupl = 1000 + ((kit - 18) * 30) + ((suplemento - 9) * 15)
    }
}

if (equipe == "Vermelha"){
    // equipe é laranja
    if (kit >= 93 && suplemento >= 47) {
        pontosKitSupl = 5000 + ((kit - 93) * 30) + ((suplemento - 47) * 15)
    }
    else if (kit >= 74 && suplemento >= 38  ) {
        pontosKitSupl = 4000 + ((kit - 74) * 30) + ((suplemento - 38) * 15)
    }
    else if (kit >= 47 && suplemento >= 24) {
        pontosKitSupl = 2500 + ((kit - 47) * 30) + ((suplemento - 24) * 15)
    }
    else if (kit >= 19 && suplemento >= 9) {
        pontosKitSupl = 1000 + ((kit - 19) * 30) + ((suplemento - 9) * 15)
    }
}

/* assume a cor da euipe (para qnd selecionar uma cor, nao ter chanche da pessoa ser "duas cores ao mesmo tempo") */
else if (equipe == "Preta") {

}

else if (equipe == "Roxa"){

}

else if (equipe == "Verde"){

}

else { /* equipe vermelha */

}

// doação de sangue
let sangue = document.getElementsByClassName("Sangue").value

   soma = soma + pontosKitSupl
  
   // devolve o resultado para o HTML
   document.getElementById("soma").innerHTML = soma.toFixed(2)
}


// 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