import ProjectCard from "./projectCard.js";

async function fetchProjects() {
    const response = await fetch("./projectList.json");
    const projects = await response.json();
    return projects;
}

async function Projects() {
    const projectsContainer = document.createElement("div");

    projectsContainer.classList.add("projects");
    projectsContainer.id = "projetos";

    const projects = await fetchProjects();
    projects.forEach((project) => {
        const projectCard = ProjectCard(project);
        projectsContainer.appendChild(projectCard);
    });

    return projectsContainer;
}

export default Projects;
