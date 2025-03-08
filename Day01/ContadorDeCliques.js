let contador = 0;
function ContadorDeCliques(){
    let botao = document.getElementById('botao');
    let saida = document.getElementById('quantidade');
    if(botao){
        contador++;
        saida.innerText = contador;
    }
};
