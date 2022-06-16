export class Burger {
    constructor({ burgerSelector, menuSelector, activeClassName = "active", bodyLockClass = "lock-burger", breakpoint = 900 }) {
        this.burger = document.querySelector(burgerSelector);
        this.menu = document.querySelector(menuSelector);

        this.burgerClass = burgerSelector.slice(1);
        this.menuClass = menuSelector.slice(1);

        this.body = document.querySelector("body");
        this.activeClassName = activeClassName;
        this.bodyLockClass = bodyLockClass;
        this.breakpoint = breakpoint;

        this.onButtonClick = this.onButtonClick.bind(this);
        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onResize = this.onResize.bind(this);

        this.burger.addEventListener("click", this.onButtonClick);
    }

    onButtonClick(event) {
        event.preventDefault();

        if (!this.burger.classList.contains(this.activeClassName)) {
            this.showMenu();
            return;
        }

        this.hideMenu();
    }

    onDocumentClick(event) {
        event.preventDefault();

        if (event.target.classList.contains(this.burgerClass)) return;
        if (event.target.closest(`.${this.burgerClass}`)) return;

        this.hideMenu();
    }

    onResize(event) {
        if (document.documentElement.clientWidth >= this.breakpoint) {
            this.hideMenu();
        }
    }

    hideMenu() {
        this.burger.classList.remove(this.activeClassName);
        this.menu.classList.remove(this.activeClassName);
        this.body.classList.remove(this.bodyLockClass);

        document.removeEventListener("click", this.onDocumentClick);
        window.removeEventListener("resize", this.onResize);
    }

    showMenu() {
        this.burger.classList.add(this.activeClassName);
        this.menu.classList.add(this.activeClassName);
        this.body.classList.add(this.bodyLockClass);

        document.addEventListener("click", this.onDocumentClick);
        window.addEventListener("resize", this.onResize);
    }
}
