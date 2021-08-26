import { gsap, Power1, Power2, Power3, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function initLoadIn() {
    const loadInEls = gsap.utils.toArray(".load-in");
    const heroLoadIn = gsap.utils.toArray(".hero-load-in");

    gsap.fromTo(
        heroLoadIn,
        { autoAlpha: 0 },
        {
            duration: 0.6,
            ease: Power1.easeIn,
            autoAlpha: 1,
            delay: 0.2
        }
    );

    gsap.set(loadInEls, { autoAlpha: 0, x: 20 });

    ScrollTrigger.batch(loadInEls, {
        scroller: window,
        start: "top bottom",
        onEnter: (batch) =>
            gsap.to(batch, {
                duration: 0.2,
                autoAlpha: 1,
                x: 0,
                overwrite: true,
                ease: Power3.easeIn
            })
    });
}
