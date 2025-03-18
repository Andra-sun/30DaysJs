import Header from "./header.js";
import Projects from "./projects.js";
import About from "./about.js";
import More from "./more.js";

async function App() {
    const root = document.getElementById("root");
    const projectsContainer = await Projects();
    root.appendChild(Header());
    root.appendChild(About());
    
    root.appendChild(projectsContainer);
    root.appendChild(More());
}

export default App;