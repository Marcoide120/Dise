document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("change-color").addEventListener("click", function () {
        const color = document.getElementById("color-picker").value;
        const items = document.querySelectorAll(".item");
        items.forEach(item => {
            item.style.backgroundColor = color;
        });
    });


    document.getElementById("add-item").addEventListener("click", function () {
        const newItem = document.createElement("div");
        newItem.classList.add("item");

        const img = document.createElement("img");
        img.src = "../Practica8/img/shrek3.jpg";
        img.alt = "Shrek";

        const changeButton = document.createElement("button");
        changeButton.textContent = "Cambiar";
        changeButton.classList.add("change-image");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Borrar";
        deleteButton.classList.add("delete-item");

        newItem.appendChild(img);
        newItem.appendChild(changeButton);
        newItem.appendChild(deleteButton);

        document.getElementById("container").appendChild(newItem);
    });


    document.getElementById("container").addEventListener("click", function (event) {
        if (event.target.classList.contains("change-image")) {
            const newImageUrl = "../Practica8/img/shrek5.webp";
            const img = event.target.parentNode.querySelector("img");
            if (img) {
                img.src = newImageUrl;
            }
        }
    });

    document.getElementById("container").addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-item")) {
            const item = event.target.closest(".item");
            if (item) {
                item.remove();
            }
        }
    });
});
