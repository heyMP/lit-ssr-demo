/* eslint-disable import/no-extraneous-dependencies */
import fetch from 'node-fetch';
import { render } from '@lit-labs/ssr/lib/render-with-global-dom-shim.js';
import { Readable } from 'stream';
import { html } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { readStream } from '../scripts/lib/readStream.js';
import '../mp-element.js';

export default async function handler(req, res) {
	window.location = new URL(`${req.headers['x-forwarded-proto']}://${req.headers['x-vercel-deployment-url']}`);
	const response = await fetch(window.location);
	const body = await response.text();

	const ssrContent = await readStream(Readable.from(render(html`
		<script type="module" src="https://unpkg.com/lit/experimental-hydrate-support.js?module"></script>
		${unsafeHTML(body)}
	`)));

  res.status(200).send(ssrContent);
}