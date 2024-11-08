export class VideoModal extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");

    template.innerHTML = `
        <md-dialog>
        <div class="container" slot="content">
          <form action="" method="dialog">
            <md-icon-button>
              <md-icon aria-hidden="true">close</md-icon>
            </md-icon-button>
          </form>
          <video
            controls
            crossorigin
            playsinline
            muted
            poster="https://raw.githubusercontent.com/CybTekk-LLP/DWC-card/refs/heads/main/poster.png"
          >
            <source
              src="../videos/video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </md-dialog>
        `;
    const style = document.createElement("style");
    style.textContent = `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    md-dialog {
        max-width: 768px;
        width: 100%;
        margin: auto;
      }
      
      .container {
        position: relative;
        overflow: hidden;
      }
      .container form {
        position: absolute;
        inset-inline-end: 20px;
        inset-block-start: 20px;
        z-index: 2;
        background-color: #ffffff;
        border-radius: 50%;
        padding: 7px;
      }
      video {
        max-width: 100%;
        height: auto;
        display: block;
      }
      
    `;
    shadow.appendChild(style);
    shadow.appendChild(template.content.cloneNode(true));
  }
  showModal(){
    this.shadowRoot.querySelector("md-dialog").setAttribute("open", "");
  }
}

customElements.define("video-modal-component", VideoModal);
