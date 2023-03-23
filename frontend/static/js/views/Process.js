import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("process");
  }

  async getHtml() {
    return `
    <section class="section-page" id="Process-Section" data-pages="process">
        <div class="section-content">
            <p>process content goes here</p>
        </div>
    </section>
    `;
  }
}
