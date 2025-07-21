// This script handles the mobile navigation menu toggle.

// Wait for the HTML document to be fully loaded before running the script.
document.addEventListener('DOMContentLoaded', () => {

  // Find the hamburger menu button in the HTML.
  const hamburger = document.querySelector('.hamburger-menu');

  // Find the navigation links container in the HTML.
  const navLinks = document.querySelector('.nav-links');

  // Check if both elements were found before adding the event listener.
  if (hamburger && navLinks) {
    // Listen for a 'click' event on the hamburger menu button.
    hamburger.addEventListener('click', () => {
      // When clicked, add or remove the 'active' class on the nav-links container.
      // This will trigger the CSS to show or hide the menu.
      navLinks.classList.toggle('active');
    });
  }

});