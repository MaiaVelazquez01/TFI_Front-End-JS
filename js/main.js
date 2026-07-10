const header = document.getElementById("header");

window.addEventListener("scroll", function () {
    console.log(window.scrollY);

    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});