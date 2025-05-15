function exe1(){
    let a, b, c, d, aux
    let grupo = 1
    while (grupo <=5){
        let conta = 1
        a = Number(prompt(`Informe o valor de A:`))
        b = Number(prompt(`Informe o valor de B:`))
        c = Number(prompt(`Informe o valor de C:`))
        d = Number(prompt(`Informe o valor de D:`))
        while (conta <= 3){
            if (a > b){
                aux = a; a = b; b = aux
            }
            if (b > c){
                ux = b; b = c; c = aux
            }
            if (c > d){
                aux = c; c = d; d = aux
            }
            conta++
        }
        alert(`Ordem crescente ${a} ${b} ${c} ${d}`)
        alert(`Ordem decrescente ${d} ${c} ${b} ${a}`)
        grupo++
    }        
}