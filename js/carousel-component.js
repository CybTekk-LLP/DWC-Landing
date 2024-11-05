class Carousel extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        // Create the carousel structure
        const carousel = document.createElement("div");
        carousel.innerHTML = `
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./images/1.png" alt="Plants and Machinery">
                    </div>
                    <div class="carousel-item">
                        <img src="./images/2.png" alt="Plants and Machinery">
                    </div>
                    <div class="carousel-item">
                        <img src="./images/3.png" alt="Plants and Machinery">
                    </div>
                     <div class="carousel-item">
                        <img src="./images/3.png" alt="Plants and Machinery">
                    </div>
                     <div class="carousel-item">
                        <img src="./images/3.png" alt="Plants and Machinery">
                    </div>
                </div>
                <button class="prev">&#10094;</button>
                <button class="next">&#10095;</button>
           `;

        // Add classes for styling
        carousel.classList.add("carousel");

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
        }`;

        // Append styles and carousel to shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(carousel);

        // Initialize carousel index and touch properties
        this.currentSlide = 0;
        this.startX = 0;
        this.isDragging = false;

        // Attach event listeners to buttons
        const prevButton = shadow.querySelector(".prev");
        const nextButton = shadow.querySelector(".next");
        this.innerCarousel = shadow.querySelector(".carousel-inner");

        prevButton.addEventListener("click", () => this.prevSlide());
        nextButton.addEventListener("click", () => this.nextSlide());

        // Add event listeners for touch events
        this.innerCarousel.addEventListener('touchstart', (event) => this.handleTouchStart(event));
        this.innerCarousel.addEventListener('touchmove', (event) => this.handleTouchMove(event));
        this.innerCarousel.addEventListener('touchend', () => this.handleTouchEnd());
    }

    showSlide(index) {
        const slides = this.innerCarousel.children;
        if (index >= slides.length) {
            this.currentSlide = 0;
        } else if (index < 0) {
            this.currentSlide = slides.length - 1;
        } else {
            this.currentSlide = index;
        }
        const offset = -this.currentSlide * 100;
        this.innerCarousel.style.transform = `translateX(${offset}%)`;
    }

    nextSlide() {
        this.showSlide(this.currentSlide + 1);
    }

    prevSlide() {
        this.showSlide(this.currentSlide - 1);
    }

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

    handleTouchEnd() {
        this.isDragging = false;
    }
}

customElements.define("carousel-component", Carousel);
