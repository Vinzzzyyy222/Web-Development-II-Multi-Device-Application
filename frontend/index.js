// Select the header element from the DOM
const header = document.querySelector("header");

// Add an event listener for the scroll event on the window
window.addEventListener("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 150); // Toggle the 'sticky' class on the header based on the scroll position
});
// Select the menu icon and navigation links from the DOM
let menu = document.querySelector('#menu-icon');
let navlinks = document.querySelector('.navlinks');

// Add a click event listener to the menu icon
menu.onclick = () =>{
    menu.classList.toggle ('bx-x');
    navlinks.classList.toggle('open');// Toggle the 'open' class on the navigation links to show or hide the menu
}
// Add a scroll event listener to the window
window.onscroll = () =>{
    menu.classList.remove ('bx-x');
    navlinks.classList.remove('open');
}
