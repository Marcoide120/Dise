document.addEventListener("DOMContentLoaded", function () {
    const main = document.getElementById("main");
    const message = document.getElementById("message");

    let timeout;
    let startTime;

    main.addEventListener("click", function () {
        if (main.classList.contains("initial")) {

            main.classList.remove("initial");
            main.classList.add("waiting");
            main.textContent = "Espera al color rojo...";
            message.textContent = "";

            const randomTime = Math.random() * 3000 + 2000;

            timeout = setTimeout(function () {

                main.classList.remove("waiting");
                main.classList.add("ready");
                main.textContent = "¡Ahora!";
                startTime = Date.now();
            }, randomTime);
        } else if (main.classList.contains("waiting")) {
            clearTimeout(timeout);
            main.classList.remove("waiting");
            main.classList.add("initial");
            main.textContent = "Pulsa para empezar";
            message.textContent = "¡Demasiado rápido! Intentalo de nuevo.";
        } else if (main.classList.contains("ready")) {
            // Calcular tiempo de reacción
            const reactionTime = Date.now() - startTime;

            main.classList.remove("ready");
            main.classList.add("final");
            main.textContent = "Pulsa para reiniciar";
            message.textContent = `Tú tiempo de reacción es: ${reactionTime} ms`;
        } else if (main.classList.contains("final")) {

            main.classList.remove("final");
            main.classList.add("initial");
            main.textContent = "Pulsa para empezar";
            message.textContent = "";
        }
    });
});
