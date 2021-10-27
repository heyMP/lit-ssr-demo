# \<mp-element>

This is an experiment with mixing traditional slot based approach with a 'lightdom as data'
approach where we derrive values for reactive properties from semantic lightdom that are 
decorated with data attributes.

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