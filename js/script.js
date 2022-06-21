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

import { SmoothScroll } from "./SmoothScroll.js";

new SmoothScroll({
    selector: "[data-anchor]",
    breakpoint: 900,
});

// --- Sliders --- //

const welcomeSlider = new Swiper(".welcome__swiper", {
    spaceBetween: 20,
    slidesPerView: "auto",
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-custom-buttom-prev",
        prevEl: ".swiper-custom-buttom-next",
    },
    freeMode: true,
});

const day1Slider = new Swiper(".day-1__swiper", {
    spaceBetween: 20,
    slidesPerView: "auto",
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-custom-buttom-prev",
        prevEl: ".swiper-custom-buttom-next",
    },
    freeMode: true,
});

const day2Slider = new Swiper(".day-2__swiper", {
    spaceBetween: 20,
    slidesPerView: "auto",
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-custom-buttom-prev",
        prevEl: ".swiper-custom-buttom-next",
    },
    freeMode: true,
});

if (document.documentElement.clientWidth > 950) {
    day2Slider.slideTo(day2Slider.slides.length - 1);
}

const day3Slider = new Swiper(".day-3__swiper", {
    spaceBetween: 20,
    slidesPerView: "auto",
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-custom-buttom-prev",
        prevEl: ".swiper-custom-buttom-next",
    },
    freeMode: true,
});

if (document.documentElement.clientWidth > 950) {
    day3Slider.slideTo(day3Slider.slides.length - 1);
}

const day4Slider = new Swiper(".day-4__swiper", {
    spaceBetween: 20,
    slidesPerView: "auto",
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-custom-buttom-prev",
        prevEl: ".swiper-custom-buttom-next",
    },
    freeMode: true,
});

const day5Slider = new Swiper(".day-5__swiper", {
    spaceBetween: 20,
    slidesPerView: "auto",
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-custom-buttom-prev",
        prevEl: ".swiper-custom-buttom-next",
    },
    freeMode: true,
});

if (document.documentElement.clientWidth > 950) {
    day5Slider.slideTo(day5Slider.slides.length - 1);
}

const day6Slider = new Swiper(".day-6__swiper", {
    spaceBetween: 20,
    slidesPerView: "auto",
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-custom-buttom-prev",
        prevEl: ".swiper-custom-buttom-next",
    },
    freeMode: true,
});

const day7Slider = new Swiper(".day-7__swiper", {
    spaceBetween: 20,
    slidesPerView: "auto",
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-custom-buttom-prev",
        prevEl: ".swiper-custom-buttom-next",
    },
    freeMode: true,
});

if (document.documentElement.clientWidth > 950) {
    day7Slider.slideTo(day7Slider.slides.length - 1);
}

// --- Input type number --- //

const appformNumber = document.querySelector(".applabel__input_number");
const appformPlus = document.querySelector(".applabel__number-plus");
const appformMinus = document.querySelector(".applabel__number-minus");

appformPlus.addEventListener("click", (event) => {
    event.preventDefault();

    appformNumber.stepUp();
});

appformMinus.addEventListener("click", (event) => {
    event.preventDefault();

    appformNumber.stepDown();
});

// --- Animation --- //

gsap.registerPlugin(ScrollTrigger);

// -- Welcome section -- //

const welcomeTL = gsap.timeline();
const animationDuration = 0.7;

welcomeTL.from(".header", {
    y: -400,
    duration: animationDuration,
});

welcomeTL.from(
    ".tourdesc__heading",
    {
        x: -1000,
        duration: animationDuration * 2,
    },
    `-=${animationDuration}`
);

welcomeTL.from(
    ".tourdesc__date",
    {
        y: 100,
        opacity: 0,
        scale: 0.8,
        duration: animationDuration * 1.5,
    },
    `-=${animationDuration}`
);

welcomeTL.from(
    ".tourdesc__slogan",
    {
        y: 100,
        opacity: 0,
        duration: animationDuration * 1.5,
    },
    `-=${animationDuration}`
);

welcomeTL.from(
    ".tourdesc__button",
    {
        y: 100,
        opacity: 0,
        duration: animationDuration * 1.5,
    },
    `-=${animationDuration}`
);

welcomeTL.from(
    ".welcome__swiper",
    {
        opacity: 0,
        duration: animationDuration,
    },
    `-=${animationDuration * 2}`
);

welcomeTL.from(
    ".welcome__swiper .swiper-slide",
    {
        opacity: 0,
        duration: animationDuration,
        stagger: animationDuration / 3,
    },
    `-=${animationDuration}`
);

welcomeTL.from(
    ".welcome__socials",
    {
        opacity: 0,
        scale: 0,
        ease: "elastic.out(2, 0.8)",
        duration: animationDuration * 2,
    },
    `-=${animationDuration}`
);

// -- Edge section -- //

gsap.from(".edge__desc", {
    scrollTrigger: ".edge__desc",
    duration: animationDuration,
    y: 200,
});

gsap.from(".features__item", {
    scrollTrigger: ".features__item",
    duration: animationDuration / 2,
    opacity: 0,
    x: 100,
    stagger: animationDuration / 3,
});

gsap.from(".airplane__bgword", {
    scrollTrigger: ".airplane__bgword",
    duration: animationDuration * 3,
    opacity: 0,
});

gsap.from(".airplane__img", {
    scrollTrigger: ".airplane__img",
    duration: animationDuration,
    x: 400,
    y: 100,
    scale: 0.5,
});

gsap.from(".edge__comment", {
    scrollTrigger: ".edge__comment",
    duration: animationDuration,
    y: 100,
    opacity: 0,
});

// --- Days sections --- //

gsap.from(".day-1__content", {
    scrollTrigger: ".day-1__content",
    duration: animationDuration,
    y: 100,
    opacity: 0,
});

gsap.from(".day-1__swiper", {
    scrollTrigger: ".day-1__swiper",
    duration: animationDuration,
    x: 100,
    opacity: 0,
});

gsap.from(".day-2__content", {
    scrollTrigger: ".day-2__content",
    duration: animationDuration,
    y: 100,
    opacity: 0,
});

gsap.from(".day-2__swiper", {
    scrollTrigger: ".day-2__swiper",
    duration: animationDuration,
    x: -100,
    opacity: 0,
});

gsap.from(".day-2__text", {
    scrollTrigger: ".day-2__text",
    duration: animationDuration,
    y: 100,
    opacity: 0,
});

gsap.from(".routecards__item", {
    scrollTrigger: ".routecards__item",
    duration: animationDuration,
    x: 100,
    opacity: 0,
    stagger: animationDuration / 3,
});

gsap.from(".day-3__content", {
    scrollTrigger: ".day-3__content",
    duration: animationDuration,
    y: 100,
    opacity: 0,
});

gsap.from(".day-3__swiper", {
    scrollTrigger: ".day-3__swiper",
    duration: animationDuration,
    x: -100,
    opacity: 0,
});

gsap.from(".day-4__content", {
    scrollTrigger: ".day-4__content",
    duration: animationDuration,
    y: 100,
    opacity: 0,
});

gsap.from(".day-4__swiper", {
    scrollTrigger: ".day-4__swiper",
    duration: animationDuration,
    x: 100,
    opacity: 0,
});

gsap.from(".day-5__content", {
    scrollTrigger: ".day-5__content",
    duration: animationDuration,
    y: 100,
    opacity: 0,
});

gsap.from(".day-5__swiper", {
    scrollTrigger: ".day-5__swiper",
    duration: animationDuration,
    x: -100,
    opacity: 0,
});

gsap.from(".day-6__content", {
    scrollTrigger: ".day-6__content",
    duration: animationDuration,
    y: 100,
    opacity: 0,
});

gsap.from(".day-6__swiper", {
    scrollTrigger: ".day-6__swiper",
    duration: animationDuration,
    x: 100,
    opacity: 0,
});

gsap.from(".day-7__content", {
    scrollTrigger: ".day-7__content",
    duration: animationDuration,
    y: 100,
    opacity: 0,
});

gsap.from(".day-7__swiper", {
    scrollTrigger: ".day-7__swiper",
    duration: animationDuration,
    x: -100,
    opacity: 0,
});

gsap.from(".day-7__text", {
    scrollTrigger: ".day-7__text",
    duration: animationDuration,
    y: 100,
    opacity: 0,
});

gsap.from(".day-8__content", {
    scrollTrigger: ".day-8__content",
    duration: animationDuration,
    y: 100,
    opacity: 0,
});
