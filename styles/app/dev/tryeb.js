//work
function showSecondPage() {
  document.getElementById("second-page").style.display = "block";
  document.body.style.overflow = "hidden"; // Hide scrollbars
}

function showThirdPage() {
  document.getElementById("third-page").classList.remove('hidden');
  document.body.style.overflow = "hidden"; // Hide scrollbars
}

document.querySelector('.large-button').addEventListener('click', showSecondPage);
document.querySelector('.next-button').addEventListener('click', showThirdPage);


function showFirstPage() {
  document.getElementById("second-page").style.display = "none";
  document.body.style.overflow = "auto"; // Show scrollbars
}

document.querySelector('.large-button').addEventListener('click', showSecondPage);

// Toggle menu when drop-down icon is clicked
document.getElementById('drop-down-icon').addEventListener('click', function() {
  var menu = document.querySelector('.menu'); // Select menu by class name
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block'; // Show menu
  } else {
    menu.style.display = 'none'; // Hide menu
  }
});


function changeIconColor() {
  var bgColor = window.getComputedStyle(document.body).getPropertyValue('background-color');
  var icon = document.getElementById('drop-down-icon');

  // Convert RGB color values to hexadecimal
  function rgbToHex(rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  }

  function fullColorHex(r, g, b) {
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return red + green + blue;
  }

  // Check if background color is light or dark
  // Reference: https://stackoverflow.com/a/3943023/12543308
  var hexColor = bgColor.match(/\d+/g);
  var r = parseInt(hexColor[0]);
  var g = parseInt(hexColor[1]);
  var b = parseInt(hexColor[2]);
  var contrast = ((r * 299) + (g * 587) + (b * 114)) / 1000;

  if (contrast >= 128) { // Light background
    icon.src = 'https://img.icons8.com/ios/50/down-squared--v2.png';
    icon.style.filter = 'invert(0%)'; // Keep icon color black
  } else { // Dark background
    icon.src = 'https://img.icons8.com/ios/50/down-squared--v2.png';
    icon.style.filter = 'invert(100%)'; // Change icon color to white
  }
}

// Call the function initially
changeIconColor();

// Call the function whenever the window resizes
window.addEventListener('resize', changeIconColor);



function showThirdPage() {
  document.getElementById("third-page").style.display = "block";
  document.body.style.overflow = "hidden"; // Hide scrollbars
}

document.querySelector('.next-button').addEventListener('click', showThirdPage);


// Get the BBC button element by its id
var bbcButton = document.getElementById('bbcButton');

// Add event listener to the button
bbcButton.addEventListener('click', function() {
  // Redirect to the desired HTML page
  window.location.href = '6THA.html';
});

// Get the buttons by their IDs
var class7Button = document.getElementById('class7Button');
var class8Button = document.getElementById('class8Button');
var class9Button = document.getElementById('class9Button');
var class10Button = document.getElementById('class10Button');
var class11ArtsButton = document.getElementById('class11ArtsButton');
var class11VocationalButton = document.getElementById('class11VocationalButton');
var class12ArtsButton = document.getElementById('class12ArtsButton');
var class12VocationalButton = document.getElementById('class12VocationalButton');

// Add event listeners to each button
class7Button.addEventListener('click', function() {
  window.location.href = '7ThA.html'; // Replace with actual HTML page
});

class8Button.addEventListener('click', function() {
  window.location.href = '8tha.html'; // Replace with actual HTML page
});

class9Button.addEventListener('click', function() {
  window.location.href = '9tha.html'; // Replace with actual HTML page
});

class10Button.addEventListener('click', function() {
  window.location.href = '10tha.html'; // Replace with actual HTML page
});

// Add event listeners to each button
class11ArtsButton.addEventListener('click', function() {
  window.location.href = '11tha.html'; // Replace with actual HTML page for 11th Arts
});

class11VocationalButton.addEventListener('click', function() {
  window.location.href = '11Vocational.html'; // Replace with actual HTML page for 11th Vocational
});

class12ArtsButton.addEventListener('click', function() {
  window.location.href = '12tha.html'; // Replace with actual HTML page for 12th Arts
});

class12VocationalButton.addEventListener('click', function() {
  window.location.href = '12Vocational.html'; // Replace with actual HTML page for 12th Vocational
});



// Function to show the hidden content
function showSmallCard() {
  var smallCardContainer = document.getElementById('smallCardContainer');
  smallCardContainer.classList.remove('hidden');
}

// Add event listener to the next button
document.querySelector('.next-button').addEventListener('click', showSmallCard);


function changeIconColorToBlack() {
  var icon = document.getElementById('drop-down-icon');
  icon.style.filter = 'invert(0%)'; // Change icon color to black
}

// Call the function to change the icon color to black when the second page is displayed
function showSecondPage() {
  document.getElementById("second-page").style.display = "block";
  document.body.style.overflow = "hidden"; // Hide scrollbars
  changeIconColorToBlack(); // Call the function to change icon color
}

document.querySelector('.large-button').addEventListener('click', showSecondPage);


function showSecondPage() {
  document.getElementById("second-page").style.display = "block";
  document.body.style.overflow = "hidden"; // Hide scrollbars
  changeIconColorToBlack();

  // Add light black background only on larger screens
  if (window.innerWidth > 768) { // Adjust the breakpoint as needed
    document.querySelector('header').classList.add('light-black-bg');
  }
}

function showFirstPage() {
  document.getElementById("second-page").style.display = "none";
  document.body.style.overflow = "auto"; // Show scrollbars

  // Remove light black background
  document.querySelector('header').classList.remove('light-black-bg');
}

if (document.referrer.includes("third_page.html")) {
  var section = document.getElementById("facilitiesSection");
  section.style.display = "block"; // Show the section
}



// JavaScript

// JavaScript

function showImageAndLinks() {
  var imageContainer = document.querySelector('.hidden-image');
  imageContainer.style.right = '0'; // Slide the image in

  var socialLinks = document.querySelector('.social-links');
  socialLinks.style.display = 'flex'; // Show social links
}

function hideImageAndLinks() {
  var imageContainer = document.querySelector('.hidden-image');
  imageContainer.style.right = '-100%'; // Slide the image out

  var socialLinks = document.querySelector('.social-links');
  socialLinks.style.display = 'none'; // Hide social links
}

// Add event listeners to the black box for mouse enter and leave events
var blackBox = document.querySelector('.black-box');
blackBox.addEventListener('mouseenter', showImageAndLinks);
blackBox.addEventListener('mouseleave', hideImageAndLinks);

// end of the site



// Call the functions on mouse enter and leave events
var blackBox = document.querySelector('.black-box');
blackBox.addEventListener('mouseenter', showImage);
blackBox.addEventListener('mouseleave', hideImage);


function changeTextPosition() {
  var textContainer = document.querySelector('.text');
  var imageContainer = document.querySelector('.hidden-image');

  if (imageContainer.style.display === 'block') {
    textContainer.style.textAlign = 'left'; // Align text to the left
  } else {
    textContainer.style.textAlign = 'center'; // Align text to the center
  }
}

// Call the function initially
changeTextPosition();

// now we selected to help

document.getElementById('contact-us-link').addEventListener('click', function(e) {
  e.preventDefault();
  var contactInfo = "Mobile Number: 122-345-6789\nEmail Address: gohawar@gmail.com";
  window.alert(contactInfo);
});