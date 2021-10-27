import esbuild from 'esbuild';
import copy from 'recursive-copy';

esbuild
  .build({
    entryPoints: ['mp-element.js'],
    entryNames: '[name]',
    outdir: 'deploy',
    format: 'esm',
    allowOverwrite: true,
    bundle: true,
    treeShaking: true,
    legalComments: 'linked',
    watch: Boolean(process.env.WATCH) || false,
    logLevel: 'info',
    sourcemap: true,
    minify: true,
  })
  .then(async result => {
    // copy the assets directory into the build directory
    await copy('assets', 'deploy/assets', { overwrite: true });
    // copy the assets directory into the build directory
    await copy('demo/index.html', 'deploy/index.html', { overwrite: true });
    result.stop;
  })
  .catch(error => console.error(error));