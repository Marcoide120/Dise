function changeBackgroundColor() {
    const color = document.getElementById("color-picker").value;
    document.body.style.backgroundColor = color;
}

function addItem() {
    const container = document.getElementById("container");
    const newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerHTML = `
        <img src="https://placekitten.com/150/150" alt="Imagen de un gatito">
        <button onclick="changeImage(this)">Cambiar</button>
        <button onclick="deleteItem(this)">Borrar</button>
    `;
    container.appendChild(newItem);
}

function changeImage(button) {
    const newImageUrl = prompt("Introduce la URL de la nueva imagen:");
    const img = button.parentElement.querySelector("img");
    img.src = newImageUrl;
}

function deleteItem(button) {
    const item = button.parentElement;
    item.remove();
}