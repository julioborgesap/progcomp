//conta / f1 = 0 / f2 = 0 / f3 = 0 / f4 = 0 / f5 = 0 / idade
// 1    /   1    /   0    /   0    /   0    /   0    /   10
// 2    /   1    /   1    /   0    /   0    /   0    /   20
// 3    /   1    /   2    /   0    /   0    /   0    /   30
// 4    /   1    /   2    /   1    /   0    /   0    /   40
// 5    /   1    /   2    /   1    /   1    /   0    /   50
// 6    /   1    /   2    /   1    /   2    /   0    /   60
// 7    /   1    /   2    /   1    /   2    /   1    /   70
// 8    /   1    /   2   /    1    /   2    /   2    /   80


function exe3(){
    let conta = 1, idade, f1 = 0, f2 = 0, f3 = 0, f4 = 0, f5 = 0
    while (conta <= 8) {
        idade = Number(prompt(`Informe a idade da pessoa: ${conta}`))
        if (idade >= 0 && idade <= 15){
            f1++
        }
        else if (idade >= 16 && idade <=30){
            f2++
        }
        else if (idade >= 31 && idade <=45){
            f3++
        }
        else if (idade >= 46 && idade <=60){
            f4++
        }
        else if (idade >= 61 && idade < 130){
            f5++
        }
        else {
            alert (`Idade invalida!`)
            continue
        }
        conta++
    }
    alert(`F1${f1} F2${f2} F3${f3} F4${f4} F5${f5} %F1${f1}`)  //terminar esse %f1 (nao sei o q vai dps, perguntar Daniel)
}