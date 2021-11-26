document.querySelector(".navbar .navbar-meta .mobile-menu").addEventListener('click', function() {
    let links = document.querySelector(".navbar-links");
    if (links.style.display == "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
})

document.querySelectorAll("*[data-modal-toggle]").forEach(el => {
    el.addEventListener('click', function(e) {
        console.log(`#${e.target.getAttribute("data-modal-toggle")}`);
        let modal = document.querySelectorAll(`#${e.target.getAttribute("data-modal-toggle")}`)[0];
        if (modal.style.display == "block") {
            modal.style.display = "none";
            modal.style.opacity = "0";
        } else {
            modal.style.display = "block";
            modal.style.opacity = "1"
        }
    })
});