const navbar = document.querySelector(".navbar");
document.addEventListener("scroll", () => {
    let Y = window.scrollY;
    navbar.classList.toggle("sticky",Y > 0);
});