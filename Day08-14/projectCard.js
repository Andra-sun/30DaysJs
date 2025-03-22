function ProjectCard({ name, day, link }) {
    const card = document.createElement("div");
    const title = document.createElement("h3");
    const subtitle = document.createElement("p");
    const linkElement = document.createElement("a");

    card.classList.add("project-card");
    
    title.textContent = name;
    subtitle.textContent = `Dia ${day}`;
    linkElement.textContent = "Ver Projeto";
    linkElement.href = link;

    card.appendChild(title);
    card.appendChild(subtitle);
    card.appendChild(linkElement);

    return card;
}

export default ProjectCard;