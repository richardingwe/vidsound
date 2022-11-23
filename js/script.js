const profileDropdown = document.querySelector('.profile_dropdown');
const dropdownMenu = document.querySelector('._dropdown-menu');
const audioTabButton = document.querySelector('#audio');
const videoTabButton = document.querySelector('#video');
const audioTemplates = document.querySelector('#audio_templates');
const videoTemplates = document.querySelector('#video_templates');
const actions = document.querySelectorAll('main .action');
const extractModal = document.querySelector('#extract_modal');
const extractModalClose = document.querySelector('#close_extract_modal');
const extractModalTitle = document.querySelector('#extract_modal_title');
const optionsButton = document.querySelector('#options_button');
const convertOptions = document.querySelector('#convert_options');

profileDropdown?.addEventListener('click', () => {
    dropdownMenu?.classList.toggle('show');
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

actions?.forEach(action => {
    action?.addEventListener('click', () => {
        extractModalTitle.innerHTML = action.getAttribute('id');
        extractModal?.classList.add('show');
    });
});

extractModal?.addEventListener('click', (e) => {
    if (e.target === extractModal) {
        extractModal?.classList.remove('show');
    }
});

extractModalClose?.addEventListener('click', () => {
    extractModal?.classList.remove('show');
});

optionsButton?.addEventListener('click', () => {
    convertOptions?.classList.toggle('show');
});

