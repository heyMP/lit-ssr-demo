/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import proxy from 'express-http-proxy';
import { render } from '@lit-labs/ssr/lib/render-with-global-dom-shim.js';
import { Readable } from 'stream';
import { html } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { readStream } from './lib/readStream.js';
import '../mp-element.js';

const PROXY_FQDN = process.env.PROXY_FQDN ?? 'http://localhost:8000';
const PORT = process.env.PORT ?? '3000';
const app = express();

// run HTML through Lit SSR conversion
const ssrContent = async (content) => readStream(Readable.from(render(html`
<script type="module" src="https://unpkg.com/lit/experimental-hydrate-support.js?module"></script>
${unsafeHTML(content)}
	`)));

// Add correct window.location to the DOM shim
app.use((req, res, next) => {
	window.location = new URL(`${req.protocol  }://${  req.get('host')  }${req.originalUrl}`);
  next();
});

app.use('/', proxy(PROXY_FQDN, {
	// intercept requests
	userResDecorator: (proxyRes, proxyResData) => new Promise((resolve) => {
			// override only the text/html type requests
			if (proxyRes.headers['content-type'] === 'text/html; charset=utf-8') {
				// convert HTML body to SSR content
				ssrContent(proxyResData.toString())
					.then(res => {
						resolve(res);
					})
			}
			else {
				resolve(proxyResData);
			}
		})
	}
));


app.listen(PORT, () => {console.log(`Listening on port 3000`)});