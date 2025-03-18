
function TypeWrite(element) {
    let speed = 50;
    let i = 0;
    let texto = element.innerText;

    element.innerText = "";

    function Escrever() {
        if (i < texto.length) {
            element.innerHTML += texto.charAt(i);
            i++;
            setTimeout(Escrever, speed);
        }
    }
    Escrever();
}