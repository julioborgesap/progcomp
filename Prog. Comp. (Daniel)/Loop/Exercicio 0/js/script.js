function exe0(){
    let nota //guarda as notas
    let conta = 1 //conta de 1 ao 6
    let soma = 0
    while (conta <= 6){
        nota = Number(prompt(`Informe a nota ${conta}`))
        soma = soma + nota
        conta++ //conta = conta + 1
    }
    let media = soma / 6
     alert(`A média das notas é ${media.toFixed(1)}`)  //mostra o resultado
}