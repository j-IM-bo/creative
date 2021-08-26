import { gsap, Power1, Power2, Power3, Power4 } from "gsap";

export function initMenu() {
    const body = document.getElementById("js-body"),
        menuButton = document.getElementById("js-menu-button"),
        menu = document.getElementById("js-menu"),
        link = document.querySelectorAll(".menu__list-link"),
        stopScrollingClass = "stop-scrolling",
        menuActiveClass = "menu-is-active",
        navBg = document.querySelector(".header__nav-bg"),
        navListItem = gsap.utils.toArray(".header__nav-list-item");

    let isActive = false;

    // bind events
    menuButton.addEventListener("click", (e) => {
        e.preventDefault;

        isActive = !isActive;

        if (isActive) {
            body.classList.add(stopScrollingClass);
            menuButton.classList.add(menuActiveClass);
            menu.classList.add(menuActiveClass);
            link.classList.add(menuActiveClass);
        } else {
            body.classList.remove(stopScrollingClass);
            menuButton.classList.remove(menuActiveClass);
            menu.classList.remove(menuActiveClass);
        }
    });

    // nav animation
    const tl = gsap.timeline();

    tl.to(navBg, { y: 0, ease: Power4.easeInOut, duration: 0.2 }, 0).to(
        navListItem,
        {
            autoAlpha: 1,
            y: -10,
            stagger: 0.1,
            delay: 0.2
        },
        0
    );
}
