export class InfrastructureComponent extends HTMLElement {
  constructor() {
    super();

    // Attach a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Create wrapper container
    const container = document.createElement("p");
    container.innerHTML = `
            DWC Infra transforms traditional
            <span><img src="./images/1.png" alt="" height="52px"></span>
            construction with innovative
            <span><img src="./images/2.png" alt="" height="52px"></span>
            designs that prioritize functionality and aesthetics. Our projects enhance community landscapes while ensuring quality and sustainability, effectively addressing the evolving needs of modern
            <span><img src="./images/3.png" alt="" height="52px"></span>
            businesses.
        `;

    // Append the container to the shadow root
    shadow.appendChild(container);

    // Attach styles to shadow root
    const style = document.createElement("style");
    style.textContent = `
            p {
                inline-size: 100%;
                line-height: 2;
                font-size: clamp(1rem, 0.482rem + 2.2099vw, 2.25rem);
                transition: all 0.3s ease;
            }

            span {
                display: inline-block;
                vertical-align: middle;
            }

            span img {
                filter: grayscale(1) saturate(0) contrast(1.3);
                transition: all 0.225s ease-out;
                border-radius: 12px;
                translate: 0 10px;
            }

            span img:hover {
                filter: grayscale(0) saturate(1) contrast(1);
                scale: 2.6;
            }
        `;

    shadow.appendChild(style);
  }
}

// Define the new element
customElements.define("infrastructure-component", InfrastructureComponent);
