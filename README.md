# \<mp-element>

This is an example web component that uses Lit SSR to provide server-side rendering. This demo uses a proxy server that uses the [@lit-labs/ssr](https://www.npmjs.com/package/@lit-labs/ssr) package to server-side render the source demo page that contains our web component.

## Demo

Source page: https://lit-ssr-demo.vercel.app
SSR'd proxy: https://lit-ssr-demo.vercel.app/api/ssr

## Start Development Server

Start the web-dev-server.

```bash
npm run start
```

Visit http://localhost:8000/demo/

## Server Side Rendering Proxy

This is an experiment with using the @lit-labs/ssr package to provide
server side rendering for this component.


### Start the proxy server

While the web-dev-server is running on port 8000, start the proxy server.

```bash
npm run start:proxy
```

Visit http://localhost:3000/demo/
