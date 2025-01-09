$(document).ready(function () {
    const main = $('#main');
    const message = $('#message');

    let timeout;
    let startTime;

    main.click(function () {
        if (main.hasClass('initial')) {
            
            main.removeClass('initial').addClass('waiting').text('Espera al color rojo...');
            message.text('');

            
            const randomTime = Math.random() * 3000 + 2000;

            timeout = setTimeout(function () {
                
                main.removeClass('waiting').addClass('ready').text('¡Ahora!');
                startTime = Date.now();
            }, randomTime);
        } else if (main.hasClass('waiting')) {
            
            clearTimeout(timeout);
            main.removeClass('waiting').addClass('initial').text('Pulsa para empezar');
            message.text('¡Demasiado rápido! Intentalo de nuevo.');
        } else if (main.hasClass('ready')) {
            
            const reactionTime = Date.now() - startTime;

            
            main.removeClass('ready').addClass('final').text('Pulsa para reiniciar');
            message.text(`Tú tiempo de reacción es: ${reactionTime} ms`);
        } else if (main.hasClass('final')) {
            
            main.removeClass('final').addClass('initial').text('Pulsa para empezar');
            message.text('');
        }
    });
});