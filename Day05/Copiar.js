function Copiar(e){
    let botao = e.target;
    let paragrafo = botao.parentElement.querySelector("p");
    let texto = paragrafo.textContent;

    navigator.clipboard.writeText(texto);
}

function AdicionarTexto(){
    let input = document.getElementById('inputText').value;
    let paragraph = document.getElementById('inputParagraph');
    paragraph.innerHTML = input;
}