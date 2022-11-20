const profileDropdown = document.querySelector('.profile_dropdown');
const dropdownMenu = document.querySelector('._dropdown-menu');

window.addEventListener('click', (e) => {
    if (e.target !== profileDropdown) {
        dropdownMenu.classList.toggle('show');
    }
});

profileDropdown.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});