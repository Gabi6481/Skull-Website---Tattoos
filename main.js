// JavaScript Document


// Get all the navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Add a click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Prevent the default behavior of the link click
    
    const targetId = link.getAttribute('href'); // Get the section ID to scroll to
    const targetSection = document.querySelector(targetId); // Get the section to scroll to
    
    // Scroll to the section using a smooth animation
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});



const button = document.querySelector('#scroll-to-top-button');

button.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

