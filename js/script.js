const profileDropdown = document.querySelector('.profile_dropdown');
const dropdownMenu = document.querySelector('._dropdown-menu');
const audioTabButton = document.querySelector('#audio');
const videoTabButton = document.querySelector('#video');
const audioTemplates = document.querySelector('#audio_templates');
const videoTemplates = document.querySelector('#video_templates');

profileDropdown?.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});


audioTabButton?.addEventListener('click', () => {
    audioTabButton?.classList.add('active');
    audioTemplates?.classList.add('show');
    videoTabButton?.classList.remove('active');
    videoTemplates?.classList.remove('show');
});

videoTabButton?.addEventListener('click', () => {
    videoTabButton?.classList.add('active');
    videoTemplates?.classList.add('show');
    audioTabButton?.classList.remove('active');
    audioTemplates?.classList.remove('show');
});