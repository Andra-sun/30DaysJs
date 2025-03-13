let modal = document.getElementById("modal").style;
function Modal() {
    modal.display = "flex";
}
function CloseModal() {
    modal.display = "none";
}

function CreateModal(title, description) {
    const modal = document.createElement("div");
    const modalContent = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalBody = document.createElement("div");
    const closeButton = document.createElement("button");

    modal.classList.add("modal");
    modalContent.classList.add("modal-content");
    modalHeader.classList.add("modal-header");

    modalHeader.innerHTML = `<h1>${title}</h1>`;
    modalBody.innerHTML = `<p>${description}</p>`;
    closeButton.innerHTML = "x";

    closeButton.addEventListener("click", () => {
        document.body.removeChild(modal);
    });

    modalHeader.appendChild(closeButton);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}
