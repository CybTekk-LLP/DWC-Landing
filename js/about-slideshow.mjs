export class AboutSlideShow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>
    .hero {
      block-size: auto;
      min-block-size: 400px;
      inline-size: 100%;
      overflow: hidden;
      background-image: url(../images/About.png);
      background-size: 1200px;
      background-position: center;
      background-repeat: no-repeat;
      filter: grayscale(1);
      transition: all 0.6s ease;
      background-repeat: repeat-x;
      animation: bg 16s linear infinite forwards;
    }
    
    .hero:hover {
      filter: grayscale(0);
    }
    
    @keyframes bg {
      0% {
        background-position: 0%;
      }
    
      100% {
        background-position: 100%;
      }
    }
    </style>
    <div class="hero"></div>
    `;
  }
}

customElements.define("about-slideshow", AboutSlideShow);
