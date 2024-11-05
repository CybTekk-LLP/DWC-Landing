export class Carousel extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });

        // Create the carousel structure container
        this.carousel = document.createElement("div");
        this.carousel.classList.add("carousel");

        // Style definitions
        const style = document.createElement("style");
        style.textContent = `
            .carousel {
            position: relative;
            inline-size: 100%;
            max-inline-size: 700px;
            margin: auto;
            overflow: hidden;
            border-radius: 35px;
            filter: grayscale(1);
            @media screen and (width < 768px) {
                border-radius: 20px;
            }
        }
        .carousel:hover{
            filter: grayscale(0);
        }
            .carousel img {
                inline-size: 100%;
                display: block;
            }
            .carousel-item {
                min-inline-size: 100%;
                box-sizing: border-box;
            }
            .carousel-inner {
                display: flex;
                transition: transform 0.5s ease-in-out;
            }
            button.prev,
            button.next {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background: none;
                border: none;
                cursor: pointer;
                color: white;
            }
            button.prev {
                inset-inline-start: 10px;
            }
            button.next {
                inset-inline-end: 10px;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(this.carousel);
    }

    connectedCallback() {
        this.renderCarousel();
    }

    // Renders the carousel items based on data-images attribute
    renderCarousel() {
        const images = this.getAttribute('data-images')?.split(',') || [];

        this.carousel.innerHTML = `
            <div class="carousel-inner">
                ${images.map((src, index) => `
                    <div class="carousel-item ${index === 0 ? 'active' : ''}">
                        <img src="${src.trim()}" alt="Image ${index + 1}">
                    </div>
                `).join('')}
            </div>
            <button class="prev">&#10094;</button>
            <button class="next">&#10095;</button>
        `;

        // Initialize navigation buttons and event listeners
        this.currentSlide = 0;
        this.innerCarousel = this.carousel.querySelector(".carousel-inner");

        const prevButton = this.carousel.querySelector(".prev");
        const nextButton = this.carousel.querySelector(".next");

        prevButton.addEventListener("click", () => this.prevSlide());
        nextButton.addEventListener("click", () => this.nextSlide());

        this.innerCarousel.addEventListener('touchstart', (event) => this.handleTouchStart(event));
        this.innerCarousel.addEventListener('touchmove', (event) => this.handleTouchMove(event));
        this.innerCarousel.addEventListener('touchend', () => this.handleTouchEnd());
    }

    showSlide(index) {
        const slides = this.innerCarousel.children;
        this.currentSlide = (index + slides.length) % slides.length;
        const offset = -this.currentSlide * 100;
        this.innerCarousel.style.transform = `translateX(${offset}%)`;
    }

    nextSlide() { this.showSlide(this.currentSlide + 1); }
    prevSlide() { this.showSlide(this.currentSlide - 1); }
    handleTouchStart(event) {
        this.startX = event.touches[0].clientX;
        this.isDragging = true;
    }
    handleTouchMove(event) {
        if (!this.isDragging) return;

        const currentX = event.touches[0].clientX;
        const diffX = this.startX - currentX;

        if (diffX > 20) {
            this.nextSlide();
            this.isDragging = false;
        } else if (diffX < -20) {
            this.prevSlide();
            this.isDragging = false;
        }
    }
    handleTouchEnd() { this.isDragging = false; }
}

customElements.define("carousel-component", Carousel);
