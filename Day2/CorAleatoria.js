function CorAleatoria(){
    let body = document.querySelector('body').style;
    let colorName = document.getElementById('colorName');
    let color = '#' + Math.floor(Math.random()*16777215).toString(16);

    body.backgroundColor = color;
    colorName.innerHTML = color;
}
