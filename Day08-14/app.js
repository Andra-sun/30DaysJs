import Header from "./header.js";
import Projects from "./projects.js";
import About from "./about.js";
import More from "./more.js";
import Week from "./week.js";
import BackToTop from "./BackTop.js";

async function App() {
    const root = document.getElementById("root");
    const projectsContainer = await Projects();
    root.appendChild(Header());
    root.appendChild(Week());
    
    root.appendChild(projectsContainer);
    root.appendChild(About());
    root.appendChild(More());
    root.appendChild(BackToTop());
}

export default App;
