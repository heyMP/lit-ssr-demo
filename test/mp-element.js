import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../mp-element.js';

describe('rh-footer', () => {
  it('has a default title "Hey there"', async () => {
    const el = await fixture(html`<mp-element></mp-element>`);

    expect(el.title).to.equal('Hey there');
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`<mp-element title="attribute title"></mp-element>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`<mp-element></mp-element>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
