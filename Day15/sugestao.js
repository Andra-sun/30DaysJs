function Sugestao() {
    const listaDeSugestaoUrl = "/listaDeSugestao.json";
    const input = document.getElementById("pesquisa");
    const caixaDeSugestao = document.getElementById("sugestao");

    fetch(listaDeSugestaoUrl)
        .then((response) => response.json())
        .then((listaDeSugestao) => {
            input.addEventListener("input", () => {
                const query = input.value.toLowerCase();
                caixaDeSugestao.innerText = "";

                if (query) {
                    const addSugestao = listaDeSugestao.filter((item) =>
                        item.toLowerCase().includes(query)
                    );
                    addSugestao.forEach((sugestao) => {
                        const div = document.createElement("div");
                        div.textContent = sugestao;
                        div.addEventListener("click", () => {
                            input.value = sugestao;
                            caixaDeSugestao.innerHTML = "";
                        });
                        caixaDeSugestao.appendChild(div);
                    });
                }
            });
        })
        .catch((error) =>
            console.error("Erro ao carregar a lista de sugestões:", error)
        );

    document.addEventListener("click", (e) => {
        if (e.target !== input) {
            caixaDeSugestao.innerHTML = "";
        }
    });
}

Sugestao();
