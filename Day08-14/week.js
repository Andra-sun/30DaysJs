import Projects from "./projects.js";

function Week() {
    const week = document.createElement("div");
    week.classList.add("week");
    week.id = "week";
    const h1 = document.createElement("h1");
    h1.style.borderBottom = "2px solid #5b4636";
    h1.innerHTML = `Projetos <span>Semana 1</span>`;

    week.innerHTML = `
        <a id="semana1" href="#semana1">Semana 1</a>
        <a id="semana2" href="#semana2">Semana 2</a>
        <a id="semana3" href="#semana3">Semana 3</a>
        <a id="semana4" href="#semana4">Semana 4</a>
    `;

    week.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", async (event) => {
            event.preventDefault();
            const weekId = event.target.id;
            const weekName = event.target.innerText;
            const projectsContainer = document.getElementById("projetos");
            projectsContainer.innerHTML = "";
            const newProjects = await Projects(weekId);
            projectsContainer.appendChild(newProjects);
            h1.innerHTML = `Projetos <span>${weekName}</span>`;
        });
    });

    week.appendChild(h1);
    return week;
}

export default Week;
