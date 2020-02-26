const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files =[
        './dist/static/main.js',
        './dist/static/polyfills.js',
        './dist/static/runtime.js'
    ];

    await concat(files, './dist/static/elements.js');
    console.info('Elements created successfully!')

})();
