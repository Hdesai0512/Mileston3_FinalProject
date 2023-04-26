/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

// Define an array of possible movie recommendations
const movies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Forrest Gump",
    "Inception",
    "Pulp Fiction",
    "The Matrix",
    "Schindler's List",
    "The Lord of the Rings: The Fellowship of the Ring",
    "Star Wars: Episode V - The Empire Strikes Back"
  ];
  
  // Store the selected movies in variables
  let movie1 = "";
  let movie2 = "";
  
  // Function to choose two random movies and display them
  function chooseMovies() {
    // Choose two random movies from the array
    movie1 = movies[Math.floor(Math.random() * movies.length)];
    movie2 = movies[Math.floor(Math.random() * movies.length)];
  
    // Display the movies
    document.getElementById("movie1").textContent = movie1;
    document.getElementById("movie2").textContent = movie2;
  }
  
  // Function to switch the second movie to a new random recommendation
  function switchMovie() {
    // Choose a new random movie
    let newMovie = movies[Math.floor(Math.random() * movies.length)];
  
    // Make sure the new movie is not the same as the first one
    while (newMovie === movie1 || newMovie === movie2) {
      newMovie = movies[Math.floor(Math.random() * movies.length)];
    }
  
    // Display the new movie and update the variable
    document.getElementById("movie2").textContent = newMovie;
    movie2 = newMovie;
  }
  
  // Add event listeners to the movie list items
  document.getElementById("movie1").addEventListener("click", function() {});
  document.getElementById("movie2").addEventListener("click", switchMovie);
  
