import "https://unpkg.com/monotone-shapes@1.0.5/src/app.js";
const template = document.createElement("template");
template.innerHTML = `
  <style>
   
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ul {
    list-style-type: none;
}

header {
    position: fixed;
    text-align: center;
    margin: auto;
    inline-size: 100%;
}

header img {
    display: inline-block;
    position: absolute;
    inset-inline-start: 0;
    inset-block-start: 0;
    margin: 20px;
    z-index: 1;
}

nav {
    position: relative;
    display: inline-block;
    font-size: 12px;
    margin-block-start: 20px;
    background-color: #fafffda9;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border-radius: 15px;
    padding: 20px;
    padding-block-end: 35px;
    color: #525253;
    text-decoration: none;
    transition: all 0.3s ease;
    block-size: 50px;
    overflow: hidden;
}

ul {
    display: flex;
    gap: 20px;
}

li {
    cursor: pointer;
}

ul>li>ul {
    inset-inline-start: 0;
    position: absolute;
    display: grid;
    text-align: start;
    inline-size: 100%;
    block-size: 100px;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    margin-block-start: 20px;
    font-size: 16px;
    padding-inline-start: 20px;

}

nav:has(.hover):hover {
    block-size: 180px;
}

li>span {
    position: relative;
    display: inline-block;
    transition: all 0.3s ease;
}

span>a {
    color: #565656;
    text-decoration: none;
}

span>a:hover {
    color: #2C2C2D;
}

li>span::after {
    position: absolute;
    content: "";
    inline-size: 2px;
    block-size: 2px;
    background-color: #525253;
    inset-inline-start: 50%;
    translate: -50%;
    inset-block-end: -5px;
    transition: all 0.3s ease;
    opacity: 0;
}

li>span:hover::after,
li>span.hover::after {
    scale: 10 1;
    opacity: 1;
}

nav:not(:hover) span.hover::after {
    opacity: 0;
}

li>span:hover {
    color: #2C2C2D;
}

nav>ul>li>ul>li {
    display: none;
    z-index: 0;

}

nav>ul>li>ul>li>a {
    display: flex;
    gap: 5px;
    align-items: center;
    text-decoration: none;
    color: #565656;
    text-underline-offset: 3px;
    transition: all 0.3s ease;
}

nav>ul>li>ul>li>a:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-color: #565656;
    color: #2C2C2D;
}


nav>ul>li:has(span.hover)>ul>li {
    display: block;
    z-index: 1;
}


ul>li>ul>li {
    color: #565656;
    transition: all 0.3s ease;
}

ul>li>ul>li:hover {
    color: #2C2C2D;
}

label {
    position: absolute;
    display: none;
}
monotone-shape {
    opacity: 20%;
}

@media screen and (width < 868px) {
    header {
        position: fixed;
        block-size: auto;
    }

    nav {
        position: relative;
        display: block;
        font-size: 16px;
        block-size: 100dvh;
        background-color: #fafffda9;
        -webkit-backdrop-filter: blur(20px);
        backdrop-filter: blur(20px);
        border-radius: 15px;
        padding: 20px;
        margin: 0;
        color: #525253;
        text-decoration: none;
        transition: all 0.3s ease;
        overflow: hidden;
        padding-block-start: 80px;
    }

    nav:hover,
    nav:has(.hover):hover {
        block-size: 100dvh;
    }

    nav>ul {
        display: flex;
        flex-direction: column;
    }

    nav>ul>li:has(span.hover)>ul {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 1;
        block-size: 100%;
        padding: 0;
        background-color: #fafffda9;
        padding: 10px;
        overflow: hidden;
        transition: all 0.3s ease;
    }

    header nav {
        display: none;
    }

    label {
        display: block;
        inset-inline-end: 0;
        inset-block-start: 0;
        margin: 20px;

    }

    label input {
        display: none;
    }

    label span {
        display: block;
        margin: 12px;
        block-size: 2px;
        inline-size: 30px;
        background-color: #2C2C2D;
        transition: all 0.3s ease;
    }

    label input:checked~span:first-of-type {
        rotate: 45deg;
        translate: 0 7px;
    }

    label input:checked~span:last-of-type {
        rotate: -45deg;
        translate: 0 -7px;
    }

    header:has(label>input:checked) nav {
        display: block;
    }
    header:has(label>input:checked){
        block-size: 100dvh;
    }
}
  </style>

  <header>
        <a href="./#"><img height="50px" src="./icons/Logo.svg" alt="Logo"></a>
        <nav>
            <ul>
                <li>
                    <span><a href="javascript:void(0)">About</a></span>
                    <ul>
                        <li><a href="./about-company.html"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Company"></monotone-shape>Company</a></li>
                        <li><a href="./why-choose-us.html"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Why Choose Us"></monotone-shape>Why Choose Us</a></li>
                        <li><a href="./ethos.html"><monotone-shape height="20px" width="20px" shape-id="" text="Ethos"></monotone-shape>Ethos</a>
                        </li>
                        <li><a href="./leadership.html"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Leadership"></monotone-shape>Leadership</a></li>
                        <li><a href="./csr.html"><monotone-shape height="20px" width="20px" shape-id="" text="CSR"></monotone-shape>CSR</a></li>
                    </ul>
                </li>
                <li>
                    <span><a href="./services.html">Services</a></span>
                    <ul>
                        <li><a href="./services.html#infrastructure-development"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Infrastructure Development"></monotone-shape>Infrastructure Development</a>
                        </li>
                        <li><a href="./services.html#design-build"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Design & Build"></monotone-shape>Design & Build</a></li>
                        <li><a href="./services.html#joint-venture-model"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Joint Venture Model"></monotone-shape>Joint Venture Model</a></li>
                    </ul>

                </li>
                <li>
                    <span><a href="./industries.html">Industries</a></span>
                    <ul>
                        <li><a href="./industries.html#commercial"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Commercials"></monotone-shape>Commercial</a></li>
                        <li><a href="./industries.html#residential"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Residential"></monotone-shape>Residential</a></li>
                        <li><a href="./industries.html#hospitality-sector"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Hospitality Sector"></monotone-shape>Hospitality Sector</a></li>
                        <li><a href="./industries.html#education-sector"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Education Sector"></monotone-shape>Education Sector</a></li>
                        <li><a href="./industries.html#healthcare"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Healthcare"></monotone-shape>Healthcare</a></li>
                        <li><a href="./industries.html#retail-spaces"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Retail Spaces"></monotone-shape>Retail Spaces</a></li>
                        <li><a href="./industries.html#it-sector"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="IT Sector"></monotone-shape>IT Sector</a></li>
                    </ul>
                </li>
                <li>
                    <span><a href="./clients.html">Clients</a></span>
                    <ul>
                        <li><a href="./clients.html#mohali-citi-centre"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Mohali Citi Centre"></monotone-shape>Mohali Citi Centre</a></li>
                        <li><a href="./clients.html#marbella-grand"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Marbella Grand"></monotone-shape>Marbella Grand</a></li>
                        <li><a href="./clients.html#sps-realtors"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="SPS Realtors"></monotone-shape>SPS Realtors</a></li>
                        <li><a href="./clients.html#vrs"><monotone-shape height="20px" width="20px" shape-id="" text="VRS"></monotone-shape>VRS</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <span><a href="./#projects">Projects</a></span>
                    <ul>
                        <li><a href="./sps-helios.html"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="SPS Helios"></monotone-shape>SPS Helios</a></li>
                        <li><a href="./mohali-citi-centre.html"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Mohali Citi Centre"></monotone-shape>Mohali Citi Centre</a></li>
                    </ul>
                </li>
                <li>
                    <span><a href="./careers.html">Careers</a></span>
                    <ul>
                        <li><a href="./careers.html#general-manager"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="General Managers (Civil)"></monotone-shape>General Managers (Civil)</a></li>
                        <li><a href="./careers.html#project-manager"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Project Managers (Civil)"></monotone-shape>Project Managers (Civil)</a></li>
                        <li><a href="./careers.html#deputy-project-manager"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Deputy Project Managers (Civil)"></monotone-shape>Deputy Project Managers (Civil)</a></li>
                        <li><a href="./careers.html#junior-engineers"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Junior Engineers (Civil)"></monotone-shape>Junior Engineers (Civil)</a></li>
                        <li><a href="./careers.html#billing-and-estimation-engineer"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Billing and Estimation Engineers"></monotone-shape>Billing and Estimation Engineers</a></li>
                        <li><a href="./careers.html"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="More"></monotone-shape>More</a></li>
                    </ul>
                </li>
                <li>
                    <span><a href="./plant-and-machinery.html">Plants & Machinery</a></span>
                    <ul>
                        <li><a href="./plant-and-machinery.html#tower-crane"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Tower Crane"></monotone-shape>Tower Crane</a></li>
                        <li><a href="./plant-and-machinery.html#jcb"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="JCB"></monotone-shape>JCB</a></li>
                        <li><a href="./plant-and-machinery.html#dg-sets"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="DG Sets"></monotone-shape>DG Sets</a></li>
                        <li><a href="./plant-and-machinery.html#batching-plant"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Batching Plant"></monotone-shape>Batching Plant</a></li>
                        <li><a href="./plant-and-machinery.html#concrete-pump"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Concrete Pump"></monotone-shape>Concrete Pump</a></li>
                        <li><a href="./plant-and-machinery.html"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="More"></monotone-shape>More</a></li>
                    </ul>
                </li>
                <li>
                    <span><a href="./contact.html">Contact</a></span>
                    <ul>
                        <li><a href="tel:+919872000194" target="_blank"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Phone"></monotone-shape>Phone</a></li>
                        <li><a href="mailto:mail@dwcinfra.com" target="_blank"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Email"></monotone-shape>Email</a></li>
                        <li><a href="https://maps.app.goo.gl/ajSmBm9pyVc9ugWD9" target="_blank"><monotone-shape height="20px" width="20px"
                                    shape-id="" text="Address"></monotone-shape>Address</a></li>
                        <li><a href="https://www.dwcinfra.com"><monotone-shape height="20px" width="20px" shape-id=""
                                    text="Website"></monotone-shape>Website</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <label>
            <input type="checkbox" name="checkbox" aria-label="Toggle navbar">
            <span></span>
            <span></span>
        </label>
    </header>
`;

export class NavbarComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const nav = this.shadowRoot.querySelector("nav");
    const lists = this.shadowRoot.querySelectorAll("nav>ul>li>ul");
    const links = this.shadowRoot.querySelectorAll("nav > ul > li > span");
    links.forEach((link) => {
      link.addEventListener("mouseover", () => {
        links.forEach((l) => l.classList?.remove("hover"));
        link.classList.add("hover");
        lists.forEach((list) => {
          list.style.display = "none";
          list.offsetHeight; // Force browser reflow
          list.style.display = "";
        });
      });
    });
    const checkbox = this.shadowRoot.querySelector("input[type='checkbox']");
    checkbox.onclick = () => {
      nav.style.display = "none";
      nav.offsetHeight; // Force browser reflow
      nav.style.display = "";
    };
  }

  disconnectedCallback() {
    const links = this.shadowRoot.querySelectorAll("nav > ul > li > span");
    links.forEach((link) => {
      link.removeEventListener("mouseover", this.handleMouseOver);
    });
  }
}

customElements.define("navbar-component", NavbarComponent);
