window.addEventListener('DOMContentLoaded', (event) => {
    class MenuCard {
        constructor(src, alt, title, price, parentelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.price = price;
            this.parent = document.querySelector(parentelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
        }
    }

    class ProductCard extends MenuCard {
        constructor(src, alt, title, description, price, parentelector, customClass) {
            super(src, alt, title, price, parentelector);
            this.description = description;
            this.customClass = customClass;
        }

        render() {
            const element = document.createElement('li');
            element.classList.add('card__item');
            element.innerHTML = `
                    <div class="card__item-inner ${this.customClass}">
                        <div class="card__item-img">
                            <img src=${this.src} alt=${this.alt}>
                        </div>
                        <div class="card__item-info">
                            <div class="card__item-title">${this.title}</div>
                            <div class="card__item-text">
                                ${this.description}
                            </div>
                            <div class="card__item-price">
                                <div class="card__item-price-text">Price</div>
                                <div class="card__item-price-value">${this.price}</div>
                            </div>
                        </div>
                    </div>
            `;
            this.parent.append(element);
        }
    }

    const productCard = new ProductCard(
        "./img/mount.jpg",
        "mount",
        'Card title',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ex ad! Consequuntur blanditiis, accusamus porro atque necessitatibus, nostrum totam asperiores quos mollitia explicabo perferendis voluptatum, doloremque ducimus id error reiciendis.',
        9,
        ".card__list",
        'item'
    );
    productCard.render();

    const productCard1 = new ProductCard(
        "./img/mount.jpg",
        "mount",
        'Card title 1',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ex ad! Consequuntur blanditiis, accusamus porro atque necessitatibus, nostrum totam asperiores quos mollitia explicabo perferendis voluptatum, doloremque ducimus id error reiciendis.',
        9,
        ".card__list",
        'item'
    );
    productCard1.render();

    const productCard2 = new ProductCard(
        "./img/mount.jpg",
        "mount",
        'Card title 1',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ex ad! Consequuntur blanditiis, accusamus porro atque necessitatibus, nostrum totam asperiores quos mollitia explicabo perferendis voluptatum, doloremque ducimus id error reiciendis.',
        9,
        ".card__list",
        'item'
    );
    productCard2.render();

    const productCard3 = new ProductCard(
        "./img/mount.jpg",
        "mount",
        'Card title 1',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ex ad! Consequuntur blanditiis, accusamus porro atque necessitatibus, nostrum totam asperiores quos mollitia explicabo perferendis voluptatum, doloremque ducimus id error reiciendis.',
        9,
        ".card__list",
        'item'
    );
    productCard3.render();

    class Nav {
        constructor(location, contacts) {
            this.parent = document.querySelector(location);
            this.contacts = contacts;
        }

        renderNav() { }
    }

    class MainNav extends Nav {
        constructor(location, contacts) {
            super(location, contacts)
        }

        renderNav() {
            const nav = document.createElement('nav');
            nav.classList.add('nav');
            nav.innerHTML = `
                <a href="#" class="logo">logo</a>
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="#" class="nav__link">nav link</a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">nav link</a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">nav link</a>
                    </li>
                </ul>
                <a href="#" class="contacts">${this.contacts}</a>
                
            `;
            this.parent.append(nav);

        }

    }

    const headerNav = new MainNav('header .container', '0732010317');
    headerNav.renderNav();

    const footerNav = new MainNav('footer .container', 'avada@gmail.com');
    footerNav.renderNav();

    class Banner {
        constructor(title, description, parentSelector, bgImage) {
            this.title = title;
            this.description = description;
            this.location = document.querySelector(parentSelector);
            this.bgImage = bgImage;
        }
        renderBanner() { }
    }

    class TopBanner extends Banner {
        constructor(title, description, parentSelector, bgImage) {
            super(title, description, parentSelector, bgImage)
        }

        renderBanner() {
            const banner = document.createElement('div');
            banner.innerHTML = `
                <div class="banner__body" style='background-image: url(${this.bgImage});'>
                    <div class="container">
                        <div class="banner__content">
                            <h2 class="banner__title">${this.title}</h2>
                            <p class="banner__description">${this.description}</p>
                        </div>
                    </div>
                </div>
            `
            this.location.append(banner);
        }
    }

    const topBanner = new TopBanner(
        'Incredible title',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus reprehenderit voluptatem vel blanditiis, deserunt commodi quos asperiores nisi exercitationem similique, harum quam? Corrupti ipsam quasi velit quas placeat eveniet dicta!',
        '.banner',
        '/img/mount.jpg'
    )
    topBanner.renderBanner();

    class Form {
        constructor(title, btnText, bgImage, location) {
            this.title = title;
            this.btnText = btnText;
            this.bgImage = bgImage;
            this.location = document.querySelector(location)
        }

        buldForm() {
            const form = document.createElement('div');
            form.innerHTML = `
            <div class="form__content" style="background: url(${this.bgImage}) center / 100% no-repeat;">
                <div class="container">
                    <div class="form__inner">
                        <h2 class="form__title">
                           ${this.title}
                        </h2>
                        <form class="form__field" action="#">
                            <input type="text" placeholder="name" class="inputfield">
                            <input type="text" placeholder="surname" class="inputfield">
                            <input type="phone" placeholder="phone" class="inputfield">
                            <input type="mail" placeholder="email" class="inputfield">
                            <button class="main__btn" type="submit">${this.btnText}</button>
                        </form>
                    </div>
                </div>
            </div>
            `;
            this.location.append(form);
        }
    }

    const form = new Form (
        ' You have a quastion?',
        'Click',
        '/img/te-bg-4.png',
        '.form'
    )

    form.buldForm();
});