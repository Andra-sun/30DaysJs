function More() {
    const more = document.createElement("div");
    more.classList.add("more");
    more.id = "ver-mais";
    more.innerHTML = `
        <h2>Ver Mais:</h2>
        <ul>
        <li>
            Para ver mais dos projetos, visite o <a href="https://github.com/Andra-sun/30DaysJs">repositório do projeto no GitHub</a> e <a href="https://andra-sun.github.io/">meu blog</a>.
        </li>
        <li>
            Para ver mais sobre mim, visite o <a href="https://andra-sun.vercel.app/">meu portifolio</a> ou <a href="https://www.linkedin.com/in/camile-andrade-guimaraes/">meu linkedin</a>.
        </li>
        </ul>
`;
    return more;
}
export default More;
