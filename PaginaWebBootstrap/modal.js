document.addEventListener('DOMContentLoaded', function () {
    const openModalButton = document.getElementById('openModalButton');
    const exampleModal = new bootstrap.Modal(document.getElementById('exampleModal'));

    openModalButton.addEventListener('click', function () {
        exampleModal.show();
    });
});