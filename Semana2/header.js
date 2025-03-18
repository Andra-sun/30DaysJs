function Header() {
    const header = document.createElement("header");
    const div = document.createElement("div");
    const nav = document.createElement("nav");
    const menuIcon = document.createElement("div");

    div.innerHTML = `
        <h1>30 dias Com JavaScript</h1>
        <h3>Projeto da semana 2</h3>
    `;
    nav.innerHTML = `
        <a href="#projetos">Projetos</a>
        <a href="#sobre">Sobre</a>
        <a href="#ver-mais">Ver Mais</a>
    `;
    menuIcon.innerHTML = `
    <h1>☰</h1>
    `;
    menuIcon.classList.add("menu-icon");

    menuIcon.addEventListener("click", () => {
        nav.classList.toggle("nav-open");
    });

    header.appendChild(div);
    header.appendChild(menuIcon);
    header.appendChild(nav);

    return header;
}

export default Header;