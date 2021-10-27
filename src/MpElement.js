import { html, css, LitElement } from 'lit';

export class MpElement extends LitElement {
  static get tag() {
    return `mp-element`;
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
      .notice {
        display: flex;
        margin: 2rem auto;
      }
      form {
        display: flex;
        margin: 2rem auto;
        font-size: 1.2rem;
        gap: 1rem;
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

  /**
   * Isomorphic import.meta.url function
   * Requires a node.js dom shim that sets window.location
   *
   * @param {string} relativeLocation
   * @returns {string} url
   */
  static getImportURL(relativeLocation) {
    const url = new URL(relativeLocation, import.meta.url);
    if (url.protocol === 'file:') {
      return new URL(relativeLocation, window.location.href);
    }
    return url;
  }

  render() {
    return html`
      <section class="tag" id="outer">
        <div>
          <h1 class="tag-title">Hello</h1>
          <p class="tag-copy">My Name Is</p>
        </div>
        <div class="tag-name">${this.name}</div>
      </section>
      <form>
        <label for="name">Name:</label>
        <input id="name" .value=${this.name} @input=${e => { this.name = e.target.value; }} $ref="input" />
      </form>

      <div>
        <img src=${this.constructor.getImportURL('../assets/elmo.gif')} alt="elmo on fire meme">
      </div>
      <div class="notice">Current window location ${window.location}</div>
    `;
  }
}