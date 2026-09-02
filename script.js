const btn = document.querySelector('.btn');
const show = document.getElementById ('nav');
const icon = document.querySelector('.btn i');

btn.addEventListener('click', () => {
    show.classList.toggle('show');
    icon.classList.toggle('bi-x');
    icon.classList.toggle('bi-list');
})