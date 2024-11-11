export class HeadingComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["text", "size", "animate"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const animate = this.hasAttribute("animate");
    const text = this.getAttribute("text");
    const size = this.getAttribute("size");
    const sizeMobile = this.getAttribute("sizeMobile");

    this.shadowRoot.innerHTML = `
    <style>
    .slide-effect {
        display: flex;
        align-items: center;
        justify-content: center;
        inline-size: 100%;
        block-size: ${size}px;
        @media screen and (width < 768px) {
          block-size: ${sizeMobile}px;
        } 
      }
      
      .text {
        position: relative;
        font-family: Geologica;
        font-size: ${size}px;
        inset-block-start: 40px;
        font-weight: bold;
        opacity: 0;
        @media screen and (width < 768px) {
          font-size: ${sizeMobile}px;
        } 
      }

      .text.animate {
        animation: slideUp ease 0.9s forwards;
      }
      
      @keyframes slideUp {
        from {
          translate: 0;
          opacity: 0;
        }
        to {
          translate: 0 -40px;
          opacity: 1;
        }
      }
    </style>
    <div class=".slide-effect">
      <div class="text ${animate ? "animate" : ""}" >
        ${text}
      </div>
    </div>
    `;
  }
}

customElements.define("heading-component", HeadingComponent);
