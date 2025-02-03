let bars = document.getElementById("mobile-menu");
let mobileMenu = document.querySelector(".navbar-menu");

bars.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
})