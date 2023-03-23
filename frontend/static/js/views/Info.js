import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("info");
  }

  async getHtml() {
    return `
    <section class="section-page" id="Info-Section" data-pages="info">
        <div class="section-content">
            <div class="info-link-wrapper">
            <a
                href="https://github.com/eugene-choi-dev"
                class="info-link"
                target="_blank"
            >
                <div class="info-link-text">github</div>
                <img src="/assets/github-icon.svg" alt="github icon" />
                
            </a>
            <a
                href="https://www.linkedin.com/in/eugene-choi-dev/"
                class="info-link"
                target="_blank"
            >
                <div class="info-link-text">linkedin</div>
                <img src="assets/linkedin-icon.svg" alt="linkedin icon" />
            </a>
            </div>
        </div>
    </section>
    `;
  }
}
