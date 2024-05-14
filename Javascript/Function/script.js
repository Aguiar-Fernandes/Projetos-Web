


function clicar() {
    alert("Você clicou no botão")
}


function escrever(params) {

    document.write('frase dentro da função ')

}

escrever()

function escrever1(msg) {
    document.write(msg)
}

escrever1('Hello Word!')
escrever1(' Javascript -- ')

function adicionar(a,b) {
    return a + b
    
}

document.write(adicionar(2,5))


function adicionar(c,d) {
    return c + d
    
}
let resultado = (adicionar(100,200))
document.write('--->> Resultado:'+resultado)