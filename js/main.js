var navbar = document.getElementById("navbar");
var prevScrollpos = window.pageYOffset;
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var currentScrollPos = window.pageYOffset;
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-glass");
        navbar.style.boxShadow = "0 0 3px rgba(255, 255, 255, 0.205)"
    } else {
        navbar.classList.remove("bg-glass");
        navbar.classList.add("bg-transparent");
    }

    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
        navbar.style.transition = "0.5s";
    } else {
        navbar.style.top = "-200px";
        navbar.style.transition = "0.5s";
    }
    prevScrollpos = currentScrollPos;

}