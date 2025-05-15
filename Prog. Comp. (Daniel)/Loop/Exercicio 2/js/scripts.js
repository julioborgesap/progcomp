//a cada 50 centavos a menos no ingresso, é mais 26 ingressos vendidos

// preço    /   qntd ingressos vendidos     /   dispesa     /   lucro
//  5,00    /           120                 /    200        /   400
//  4,50    /           146                 /    200        /   457
//  4,00    /           172                 /    200        /   488
//  3,50    /           198                 /    200        /   493
//  3,00    /           224                 /    200        /   472
//  2,50    /           250                 /    200        /   425
//  2.00    /           276                 /    200        /   352
//  1,50    /           302                 /    200        /   253
//  1,00    /           328                 /    200        /   128

function exe2(){
    //variáveis iniciais
    let preco = 5.0 //preço inicial do ingresso
    let precoMinimo = 1.0 //reço mínimo
    let reducaoPreco = 0.5 //redução de preço em cada passo

    let ingressosIniciais = 120 //ingressos vendidos inicialmente
    let aumentoPorReducao = 26 //quantidade adicional de ingressos por cada reducao de preço

    let custoFixo = 200 //despesas FIXAS

    //variaveis para guardar o maior lucro encontrado
    let maiorLucro = 0
    let precoMelhor = 0
    let ingressosMelhor = 0

    //enquanto o preço for maior ou igual ao preço mínimo
    while (preco >= precoMinimo) {

        //calcula quantas reducoes de preço foram feitas
        let reducoesFeitas = (5 - preco) / reducaoPreco

        //calcula a quantidade de ingressos vendida com base nas reduções feitas
        let ingressosVendidos = ingressosIniciais + (aumentoPorReducao * reducoesFeitas)

        //calcula a receita
        let receita = preco * ingressosVendidos

        //calcula o lucro
        let lucro = receita - custoFixo

        //mostra o resultado atual
        console.log(`Preço: R$ ${preco.toFixed(2)}, Ingressos vendidos: ${ingressosVendidos}, Lucro: R$ ${lucro.toFixed(2)}`)

        //verifica se o lucro atual é o maior ate agora
        if (lucro > maiorLucro) {
            maiorLucro = lucro
            precoMelhor = preco
            ingressosMelhor = ingressosVendidos
        }

        //ddiminui o preço para a próxima iteração
        preco -= reducaoPreco
    }
    resultado += `\nMaior lucro: R$${maiorLucro.toFixed(2)} com ${ingressosMelhor} ingressos a R$${precoMelhor.toFixed(2)}`
    
    alert(resultado)
}