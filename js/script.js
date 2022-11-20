const profileDropdown = document.querySelector('.profile_dropdown');
const dropdownMenu = document.querySelector('._dropdown-menu');


profileDropdown.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});