const toggleButton = document.querySelector('.nav-toggle');
const toggleIcon = toggleButton.querySelector('img');
const mobileNav = document.getElementById('mobile-menu');
const subMenuButton = document.querySelectorAll('.btn-submenu');
const subMenu = document.querySelectorAll('.submenu');

// Define media query for 680px
const mediaQuery = window.matchMedia('(max-width: 779px)');

// Only toggle mobile nav when screen is below 680px
toggleButton.addEventListener('click', () => {
  if (mediaQuery.matches) {
    mobileNav.classList.toggle('active');
    toggleIcon.src = mobileNav.classList.contains('active') 
      ? 'images/icon-close.svg' 
      : 'images/icon-hamburger.svg';
  }
});

// Submenu toggle logic (only for mobile)
subMenuButton.forEach((button, index) => {
  const arrow = button.querySelector('.arrow');
  subMenu[index].classList.add('visually-hidden');

  button.addEventListener('click', () => {
    if (!mediaQuery.matches) return; // prevent desktop toggle

    subMenu.forEach((menu, i) => {
      const otherArrow = subMenuButton[i].querySelector('.arrow');
      if (i !== index) {
        menu.classList.add('visually-hidden');
        otherArrow.classList.remove('rotate');
      }
    });

    subMenu[index].classList.toggle('visually-hidden');
    arrow.classList.toggle('rotate');
  });
});
