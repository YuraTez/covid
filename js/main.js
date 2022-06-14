let headerContent = document.querySelector(".header-content")
let rect = headerContent.getBoundingClientRect()

let submenuList = document.querySelectorAll(".nav-list-submenu");

let body = document.querySelector("body");

if (window.innerWidth > 768) {
    submenuList.forEach((el) => {

        Object.assign(el.style, {
            left: rect.left + 'px',
            width: headerContent.offsetWidth + 'px',
        });
    })
}

const smoothLinks = document.querySelector('.scroll-btn');


smoothLinks.addEventListener('click', () => {
    const id = smoothLinks.getAttribute('data-scroll');

    document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});


let hamburger = document.querySelector(".hamburger");

let nav = document.querySelector(".nav")
let navItems = document.querySelectorAll(".nav-list__item--arrow");


navItems.forEach((el) => {
    if (window.innerWidth > 768) {
        el.addEventListener("mouseover", () => {
            body.classList.add("no-scroll")
        })
        el.addEventListener("mouseout", () => {
            body.classList.remove("no-scroll")
        })
    } else {
        el.addEventListener("click", () => {
            el.classList.toggle("active");
        })
    }
})


hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    body.classList.toggle("no-scroll");
    nav.classList.toggle("active");

    navItems.forEach((el) => {
        el.classList.remove("active")
    })
})
