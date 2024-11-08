export class Footer extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const footer = document.createElement("footer");
    footer.innerHTML = `<img class="logo" src="./icons/Logo.svg" alt="logo" />
      <ul class="footer-links">
        <li>
          Address
          <ul class="inner-list">
            <li class="address-link">
              <a
                href="https://maps.app.goo.gl/ajSmBm9pyVc9ugWD9"
                target="_blank"
              >
                <img src="./icons/Location.svg" alt="location" />
                373, Phase-2, Industrial Area, Panchkula-134109 (Haryana) INDIA
              </a>
            </li>
            <li class="address-link">
              <a href="tel:9878883436" target="_blank">
                <img src="./icons/Phone.svg" alt="phone" />
                9878883436, 9878883447
              </a>
            </li>
            <li class="address-link">
              <a href="mailto:mail@dwcinfra.com" target="_blank">
                <img src="./icons/Message.svg" alt="mail" />
                mail@dwcinfra.com
              </a>
            </li>
            <li class="address-link">
              <a href="#">
                <img src="./icons/Globe.svg" alt="website" />
                www.dwcinfra.com
              </a>
            </li>
          </ul>
        </li>
        <li>
          Pages
          <ul class="pages inner-list">
            <li><a href="./about.html">About</a></li>
            <li><a href="./services.html">Services</a></li>
            <li><a href="./industries.html">Industries</a></li>
            <li><a href="./clients.html">Clients</a></li>
            <li><a href="./projects.html">Projects</a></li>
            <li><a href="./careers.html">Careers</a></li>
            <li><a href="./plant-and-machinery.html">Plant & Machinery</a></li>
            <li><a href="./contact.html">Contact</a></li>
          </ul>
        </li>
        <li>
          Socials
          <ul class="inner-list socials">
            <li class="social-link"
              ><a href="/facebook" target="_blank"
                ><img src="./icons/Facebook.svg" alt="facebook" /></a
            ></li>
            <li class="social-link"
              ><a href="https://www.instagram.com/dwcinfra/" target="_blank"
                ><img src="./icons/Instagram.svg" alt="Instagram" /></a
            ></li>
            <li class="social-link"
              ><a href="https://twitter.com/dwcinfra" target="_blank"
                ><img src="./icons/Twitter.svg" alt="Twitter" /></a
            ></li>
          </ul>
          <img
            class="board"
            src="./icons/Board.svg"
            alt=""
            role="presentation"
          />
        </li>
      </ul>
      <div class="footer-baseline">
        <p>Copyright ©2024 DWC All rights reserved</p>
        <ul>
          <li><a href="./privacy.html">Privacy</a></li>
          <li><a href="./terms.html">Terms</a></li>
          <li><a href="./legal.html">Legal</a></li>
          <li><a href="./sitemap.html">Site Map</a></li>
        </ul>
      </div>`;
    footer.classList.add("footer");

    const style = document.createElement("style");
    style.textContent = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.footer {
  inline-size: 100%;
  padding: 20px;
  font-family: "Geologica", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  --primary: #2c2c2d;
  --secondary: #434343;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  margin-block-start: 45px;
  font-size: 1rem;
  color: var(--secondary);
  gap: 20px;
  @media screen and (width <= 768px) {
    grid-template-columns: auto;
    gap: 30px;
  }
}

.inner-list {
  margin-block-start: 20px;
  list-style: none;
}

.inner-list li {
  margin-block-end: 10px;
  font-size: 0.875rem;
}

.inner-list li a {
  color: var(--primary);
  text-decoration: none;
}

.inner-list li:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
}

.address-link a {
  display: flex;
  align-items: center;
  gap: 12px;
}

.pages {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
}

.socials {
  display: flex;
  
}

.social-link {
  margin-inline-end: 2.75rem;
  filter: grayscale(1) contrast(3);
  transition: all 0.6s ease;
}

.social-link:hover {
  filter: grayscale(0) contrast(1);
}

.social-link:last-of-type {
  margin-inline-end: 0;
}

.board {
  margin-block-start: 20px;
  filter: grayscale(1);
  transition: all 0.6s ease;
}

.footer:hover .board {
  filter: grayscale(0);
}

.footer-baseline {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.75vw;
  font-size: 10px;
  color: var(--secondary);
  margin-block-start: 54px;
  margin-block-end: 24px;
  @media screen and (width <= 768px) {
    flex-direction: column;
    gap: 10px;
  }
}

.footer-baseline ul {
  display: flex;
  align-items: center;
  gap: 5px;
  list-style: none;
}

.footer-baseline ul li {
  border-inline-end: 1px solid var(--secondary);
  padding-inline: 10px;
}
.footer-baseline ul li:last-of-type {
  border-inline-end: none;
}

.footer-baseline ul li a {
  color: var(--secondary);
  text-decoration: none;
}

.footer-baseline ul li a:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
} `;

    shadow.appendChild(style);
    shadow.appendChild(footer);
  }
}

customElements.define("footer-component", Footer);
