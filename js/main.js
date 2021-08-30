import { remoteForm } from '@github/remote-form'





var navbar = document.getElementById("navbar");
// var coffee = document.getElementById("coffee");
var prevScrollpos = window.pageYOffset;
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var currentScrollPos = window.pageYOffset;
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        if (prevScrollpos > currentScrollPos) {
            navbar.style.top = "0";
            navbar.style.transition = "0.5s";
            // coffee.style.display = "none";
        } else {
            navbar.style.top = "-200px";
            navbar.style.transition = "0.5s";
            // coffee.style.display = "block"
        }
        prevScrollpos = currentScrollPos;


    }
}




// Make all forms that have the `data-remote` attribute a remote form.
remoteForm('form[data-remote]', async function(form, wants, request) {
    // Before we start the request
    form.classList.remove('has-error')
    form.classList.add('is-loading')

    let response
    try {
        response = await wants.html()
    } catch (error) {
        // If the request errored, we'll set the error state and return.
        form.classList.remove('is-loading')
        form.classList.add('has-error')
        return
    }

    // If the request succeeded we can do something with the results.
    form.classList.remove('is-loading')
    form.querySelector('.results').innerHTML = response.html
})