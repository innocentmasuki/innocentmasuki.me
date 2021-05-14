var navbar = document.getElementById("navbar");
var prevScrollpos = window.pageYOffset;
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var currentScrollPos = window.pageYOffset;
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        if (prevScrollpos > currentScrollPos) {
            navbar.style.top = "0";
            navbar.style.transition = "0.5s";
        } else {
            navbar.style.top = "-200px";
            navbar.style.transition = "0.5s";
        }
        prevScrollpos = currentScrollPos;


    }
}