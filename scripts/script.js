const hamburger = document.querySelector('.hamburger-container');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', function() {
    this.classList.toggle('open');
    nav.classList.toggle('open');
});
