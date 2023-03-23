import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("contact");
  }

  async getHtml() {
    return `
    <section class="section-page" id="Contact-Section" data-pages="contact">
        <div class="section-content">
            <p>contact content goes here</p>
        </div>
    </section>
    `;
  }
}
