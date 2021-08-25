export function initCarousel() {
    const track = document.querySelector(".carousel__track"),
        slides = Array.from(track.children),
        nextButton = document.querySelector(".btnNext"),
        prevButton = document.querySelector(".btnPrev"),
        slideWidth = slides[0].getBoundingClientRect().width;

    // arrange slide next to each other
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + "px";
    };
    slides.forEach(setSlidePosition);

    // move slides left or right
    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = "translateX(-" + targetSlide.style.left + ")";
        currentSlide.classList.remove("current-slide");
        targetSlide.classList.add("current-slide");
    };

    // prevoious button
    prevButton.addEventListener("click", (e) => {
        e.preventDefault;

        const currentSlide = track.querySelector(".current-slide"),
            prevSlide = currentSlide.previousElementSibling;

        moveToSlide(track, currentSlide, prevSlide);
    });

    // next button
    nextButton.addEventListener("click", (e) => {
        e.preventDefault;
        const slideTitle = document.querySelectorAll(".carousel__title");

        const currentSlide = track.querySelector(".current-slide"),
            nextSlide = currentSlide.nextElementSibling;

        moveToSlide(track, currentSlide, nextSlide);
    });
}
