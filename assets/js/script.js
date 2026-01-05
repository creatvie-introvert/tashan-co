document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.getElementById("navbar");

    if (!menuToggle || !nav) return;

    menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute("aria-expanded", String(!isExpanded));
        nav.classList.toggle("nav-open");
    });

    nav.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            menuToggle.setAttribute("aria-expanded", "false");
            nav.classList.remove("nav-open");
        }
    });
});