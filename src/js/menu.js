export function initMenu() {
    const body = document.getElementById("js-body"),
        menuButton = document.getElementById("js-menu-button"),
        menu = document.getElementById("js-menu"),
        link = document.querySelectorAll(".menu__list-link"),
        stopScrollingClass = "stop-scrolling",
        menuActiveClass = "menu-is-active";

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
}
