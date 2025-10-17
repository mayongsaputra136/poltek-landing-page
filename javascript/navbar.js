const menubar = document.querySelector(".menubar"); // take class menubar from svg menubar icon
const navSlide = document.querySelector("nav ul"); // take ul element for give animation.
const nav = document.querySelector("nav"); // take nav element for give animation when scrolled

// Toggle navbar when menubar clicked
menubar.addEventListener("click", () => {
  navSlide.classList.toggle("slide"); // give animation slide when menubar clicked
  menubar.classList.toggle("active"); // give border when menubar active
});

// underline active link
const navLinks = document.querySelectorAll("nav ul li a"); // select all navbar links

function ActiveLink(event) {
    // these step is needed if our link is for one page site
    // but if we use these links to go to another page, we can skip these step

    // remove class .active from all links
    navLinks.forEach(link => {
        link.classList.remove("active"); // Remove active class from all links
    })
    // add class .Active for element thas just clicked
    event.target.classList.add('active')
}

// set eventlistener to each links
navLinks.forEach(link => {
    link.addEventListener('click', ActiveLink)
})


// Give animation when scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.classList.add("scrolled"); // give animation when scrolled
  } else {
    nav.classList.remove("scrolled"); // remove animation when scroll top
  }
});

// code to close navbar when clicked outside
function closeNavbarOutsideClick(event) {
  const targetElement = event.target; // Element that was clicked
  const isNavbar = navSlide.contains(targetElement); // Check if the clicked element is inside the navbar
  const isMenubar = menubar.contains(targetElement); // Check if the clicked element is the menubar icon
  const isNavbarOpen = navSlide.classList.contains("slide"); // Check if the navbar is currently open

  // If the navbar is open and the clicked element is outside both the navbar and menubar, close the navbar

  if (isNavbarOpen && !isNavbar && !isMenubar) {
    navSlide.classList.remove("slide"); // Close the navbar
    menubar.classList.remove("active"); // Remove active state from menubar
  }
}

document.addEventListener("click", closeNavbarOutsideClick); // Attach the event listener to the document to capture all clicks
