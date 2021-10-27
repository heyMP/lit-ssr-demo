import { html, css, LitElement } from 'lit';

export class MpElement extends LitElement {
  static get tag() {
    return `mp-element`;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .tag {
        border: 1px solid rgba(0, 0, 0, 0.7);
        margin: 0 auto;
        width: 500px;
        height: 300px;
        background-color: #f00;
        border-radius: 20px;
      }
      .tag > div {
        padding: 10px 0;
      }
      .tag-title {
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 32px;
        letter-spacing: 0.1em;
        text-align: center;
        padding: 0 0 10px;
        margin: 0;
      }
      .tag-copy {
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 18px;
        letter-spacing: 0.1em;
        text-align: center;
        margin: 0;
      }
      .tag-name {
        box-sizing: border-box;
        width: 100%;
        height: 65%;
        cursor: default;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
      }
    `;
  }

  static get properties() {
    return {
      name: { type: String },
    };
  }

  constructor() {
    super();
    this.name = 'Somebody';
  }

  render() {
    return html`
      <section class="tag" id="outer">
        <div>
          <h1 class="tag-title">Hello</h1>
          <p class="tag-copy">My Name Is</p>
        </div>
        <div class="tag-name">
          ${this.name}
        </div>
      </section>
    `;
  }
}

customElements.define(MpElement.tag, MpElement);
