// Function to toggle visibility of hidden content
function toggleVisibility(id) {
  var element = document.getElementById(id);
  element.classList.toggle('show');
}

// Toggle navigation menu on logo click for smaller screens
const navMenu = document.querySelector('.nav-menu');
document.querySelector('.logo').addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Toggle dropdown content visibility
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.nav-menu');

dropdownBtn.addEventListener('click', () => {
  dropdownContent.classList.toggle('open');
});

// Toggle hidden content when dropdown icon is clicked
document.getElementById('.drop-down-icon').addEventListener('click', function() {
  var hiddenContent = document.querySelector('.hidden-content'); // Select hidden content
  hiddenContent.classList.toggle('show'); // Toggle visibility of hidden content
});





// Close nav-menu when clicking outside
document.addEventListener('click', function(event) {
  const isClickInsideNav = navMenu.contains(event.target);
  const isClickInsideIcon = dropdownIcon.contains(event.target);
  if (!isClickInsideNav && !isClickInsideIcon) {
    navMenu.classList.remove('open');
  }
});



const header = document.querySelector('header');

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    header.style.backgroundColor = '#fff'; // Change to desired color
  } else {
    header.style.backgroundColor = 'rgba(187, 222, 251, 0.8)'; // Reset to original color
  }
});