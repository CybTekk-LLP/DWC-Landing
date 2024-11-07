export class AnimatedCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["reverse", "text", "image-src", "animate"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const reverse = this.hasAttribute("reverse");
    const animate = this.hasAttribute("animate");
    const text = this.getAttribute("text") || "";
    const imageSrc = this.getAttribute("image-src") || "";

    this.shadowRoot.innerHTML = `
            <style>
            article {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 25px;
            }
            article.reverse{
                flex-direction: row-reverse;
            }

            .image-container {
                position: relative;
            }

            p {
                inline-size: 60%;
            }

            .image-container img:last-of-type {
                inline-size: 100%;
                object-fit: cover;
                max-inline-size: 640px;
                block-size: 404px;
                border-radius: 35px;
                transition: all 0.6s ease;
                filter: grayscale(1) contrast(1.2) saturate(0.3);
            }
            
            .image-container img:last-of-type:hover{
                filter: grayscale(0) contrast(1) saturate(1);
            }
            .image-container img:first-of-type {
                position: absolute;
                inline-size: 20%;
                inset-inline-start: -18px;
                inset-block-start: -18px;
                display: block;
                z-index: 1;
                
            }

            @media screen and (width < 768px) {
                article{
                    flex-direction: column;
                }
                article.reverse{
                    flex-direction: column-reverse;
                }
                p {
                    inline-size: 100%;
                }
            }

            article.animate .image-container img:last-of-type{
            animation: slideup 0.9s ease both;
            }

            @keyframes slideup {
                0%{
                    translate: 0 80px;
                    opacity: 0;
                }
                100%{
                    translate: 0 0;
                    opacity: 1;
                }
            }
            </style>
            <article class="${reverse ? "reverse" : ""} ${
      animate ? "animate" : ""
    }">
                <p>${text}</p>
                <div class="image-container">
                    <img src="./icons/Animated.svg" alt="" role="presentation">
                    <img src="${imageSrc}" alt="DWC General Construction">
                </div>
            </article>
        `;
  }
}

customElements.define("animated-card", AnimatedCard);
