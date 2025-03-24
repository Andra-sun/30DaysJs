function Parallax() {
    document.addEventListener("mousemove", function (e) {
        let x = (e.clientX / window.innerWidth) * 2 - 1;
        let y = (e.clientY / window.innerHeight) * 2 - 1;

        document.querySelectorAll(".layer").forEach((layer) => {
            let speed = layer.getAttribute("data-speed");
            let xMove = x * speed;
            let yMove = y * speed;

            layer.style.transform = `translate(${xMove}px, ${yMove}px)`;
        });
    });
}
Parallax();
