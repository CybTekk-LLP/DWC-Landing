export class VideoModal extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");

    template.innerHTML = `
        <md-dialog open>
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
            poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
          >
            <source
              src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
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
        z-index: 1;
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
}

customElements.define("video-modal-component", VideoModal);
