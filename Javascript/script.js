// JavaScript code to toggle the mobile menu
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.querySelector('.navmenu ul');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Next Page Button JavaScript
function openLink() {
    window.open('https://www.example.com', '_blank');
}
mongodb://localhost:27017