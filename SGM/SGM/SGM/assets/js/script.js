
/* incia contador, count 
marca a posição 1 do elemento: radio1 */


let count = 1;
document.getElementById("radio1").checked = true;

/* funcção function() com parametro e 3000 milisegundo */

setInterval(function() {
    proximaimagem();
}, 3000)

/* adiciona contador para pegar o próximo radio, quando chega no ultimo, joga 1 para variavel e volta no inicio */

function proximaimagem(){
    count++
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}