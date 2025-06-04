const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.checked = false; // uncheck checkbox supaya menu tersembunyi
  });
});
