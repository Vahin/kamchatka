export class SmoothScroll {
    constructor({ selector, breakpoint = 900 }) {
        this.list = document.querySelectorAll(selector);
        this.breakpoint = breakpoint;

        this.smoothScrollTo = this.smoothScrollTo.bind(this);

        this.list.forEach((item) => {
            let target = item.dataset.anchor;

            item.addEventListener("click", (event) => {
                this.onClick({
                    event,
                    target,
                });
            });
        });
    }

    onClick({ event, target }) {
        event.preventDefault();

        this.smoothScrollTo({
            element: document.querySelector(`.${target}`),
        });
    }

    smoothScrollTo({ element }) {
        if (!element) return;
        let offsetTop = document.querySelector(".header").offsetHeight;

        let end = window.pageYOffset + element.getBoundingClientRect().top;
        if (window.pageYOffset > end && document.documentElement.offsetWidth < this.breakpoint) {
            end -= offsetTop;
        }

        window.scrollTo({
            top: end,
            behavior: "smooth",
        });
    }
}
