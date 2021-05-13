var navbar = document.getElementById("navbar");
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-glass");
        navbar.style.boxShadow = "0 0 3px rgba(255, 255, 255, 0.205)"
    } else {
        navbar.classList.remove("bg-glass");
        navbar.classList.add("bg-transparent");
    }
}