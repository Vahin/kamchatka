export class SmoothScroll {
    constructor({ selector, breakpoint = 0 }) {
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

    smoothScrollTo({ element, onEnd = () => {} }) {
        if (!element) return;
        let offsetTop = document.querySelector("header").offsetHeight;

        let startPosition = window.pageYOffset;
        let endPosition = element.getBoundingClientRect().top;
        if (endPosition < 0 && window.clientWidth < this.breakpoint) endPosition -= offsetTop;

        if (startPosition + endPosition < 0) {
            endPosition = -startPosition;
        }
        let y = startPosition + endPosition;

        window.scrollBy({
            top: endPosition,
            behavior: "smooth",
        });

        let endInterval = setInterval(() => {
            if (window.pageYOffset >= y - 20 && window.pageYOffset <= y + 20) {
                onEnd();
                clearInterval(endInterval);
            }
        }, 20);
    }
}
