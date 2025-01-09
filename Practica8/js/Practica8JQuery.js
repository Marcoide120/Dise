$(document).ready(function () {
    // Cambiar el color de fondo de los divs con clase .item al hacer clic en un botón
    $('#change-color').on('click', function () {
        const color = $('#color-picker').val();
        $('.item').css('background-color', color);
    });

    // Añadir un nuevo elemento
    $('#add-item').on('click', function () {
        const newItem = $(`
            <div class="item">
                <img src="../Practica8/img/shrek3.jpg" alt="Shrek">
                <button class="change-image">Cambiar</button>
                <button class="delete-item">Borrar</button>
            </div>
        `);
        $('#container').append(newItem);
    });

    // Cambiar la imagen dentro de un div
    $('#container').on('click', '.change-image', function () {
        const newImageUrl = "../Practica8/img/shrek5.webp";
        $(this).siblings('img').attr('src', newImageUrl);
    });

    // Eliminar un elemento
    $('#container').on('click', '.delete-item', function () {
        $(this).closest('.item').remove();
    });
});

