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

import { SmoothScroll } from "./SmoothScroll.js";

new SmoothScroll({
    selector: "[data-anchor]",
    breakpoint: 900,
});
