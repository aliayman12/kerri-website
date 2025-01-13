const navbar = document.getElementById("navbar-example");

window.onscroll = function () {
  if (window.scrollY > 300) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
};
