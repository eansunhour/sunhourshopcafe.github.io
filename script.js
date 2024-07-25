// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach(item => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        alert(`You clicked on ${item.textContent}`);
      });
    });
  });
  