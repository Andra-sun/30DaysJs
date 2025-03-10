let relogio = document.getElementById("relogio");

setInterval(() => {
    relogio.innerHTML = new Date().toLocaleTimeString();
}, 1000);
