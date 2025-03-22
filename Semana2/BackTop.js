function BackToTop() {
    const btn = document.createElement("button");
    btn.classList.add("backtop");
    btn.innerText = "↑";

    btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    return btn;
}

export default BackToTop;
