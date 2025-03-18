function About() {
    const about = document.createElement("div");
    about.classList.add("about");
    about.id = "sobre";
    about.innerHTML = `
        <h2>Sobre:</h2>
        <p><span>30 Dias com JavaScript</span> é um projeto que criei para revisar conceitos da 
        linguagem e manter a prática constante. Além de aprofundar meus estudos, aproveitei essa
        ideia repentina para atualizar meu blog diariamente, registrando tudo o que fiz a cada dia e também
        movimentando meu LinkedIn. O projeto me ajuda a manter uma rotina organizada: logo cedo, verifico minha lista de tarefas, executo os desafios do dia, registro a grvação de tela, escrevo um post para o blog e, por fim, compartilho o resultado no LinkedIn.</p>
    `;
    return about;
}
export default About;
