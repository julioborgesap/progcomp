function pesquisaSatisfacao(){
    let nota //guarda a nota de cada participante (informada pelo usuario)
    let totalNotas = 0 //soma de todas as notas
    let satisfeitos = 0 //contador de satisfeitos
    let insatisfeitos = 0 //contador de insatisfeitos
    let bom = 0 //contado de bom
    const participantes = 10 //total de participantes
    let conta = 1 //controle do número de participantes
  
    while (conta <= participantes){
      nota = Number(prompt(`Participante ${conta}: Informe uma nota de satisfação (0 a 10)`))
    
      if (nota < 0 || nota > 10) {
        alert("Nota inválida!")
        continue; //volta para o início sem contar nota errada
      }
    
      totalNotas += nota; //so soma se for válida
      conta++; //só avança se for válida
    
      if (nota >= 8 && nota <= 10){
        satisfeitos++
        alert("Satisfeito, parabéns!")
      }
      else if (nota < 5 && nota >= 0){
        insatisfeitos++
        alert("Insatisfeito, pode melhorar!")
      }
      else if (nota >= 5 && nota < 8){
        bom++
        alert("Bom, na média.")
      }
    }     
  
    const media = totalNotas / participantes
  
    //resumo final
    alert(`Resultado da Pesquisa:
  - Média das notas: ${media.toFixed(2)}
  - Total de Satisfeitos: ${satisfeitos}
  - Total na média: ${bom}
  - Total de Insatisfeitos: ${insatisfeitos}`) //esse "${media.toFixed(2)}" limita a 2 algarismos
  }
  