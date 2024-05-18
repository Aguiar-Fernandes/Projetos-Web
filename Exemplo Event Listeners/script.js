/* objetivos:
ao clicar no botão a cor de fundo da cixa seja alterada
apresnetar o texto 'Clique"  no console
remover o evento click do botão
*/

let caixa = document.querySelector('.caixa') /* alterar o conteudo da variavel */
let botao = document.querySelector('button')

function executar(event){
    caixa.classList.add('cor-fundo-caixa')  /* o evento ira mudar a cor da class caixa pela cor-fundo-caixa */
    console.log('Clique')
    botao.removeEventListener('click',executar)

}

botao.addEventListener('click', executar)    /* evento click chama função executar */

