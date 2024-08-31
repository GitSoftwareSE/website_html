// script.js
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('#mainav ul');

  menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
  });
});