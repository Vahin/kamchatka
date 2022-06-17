import { Burger } from "./burger.js";

new Burger({
    burgerSelector: ".header__burger",
    menuSelector: ".header__nav",
});

import { HideOnScroll } from "./hideOnScroll.js";

new HideOnScroll({
    elementSelector: ".header",
    menuSelector: ".nav",
});

// import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";

const welcomeSlider = new Swiper(".welcome__swiper", {
    spaceBetween: 20,
    slidesPerView: "auto",
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-custom-buttom-prev",
        prevEl: ".swiper-custom-buttom-next",
    },
});
