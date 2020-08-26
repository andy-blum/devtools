// get data
// check for updates
// spec on?
// this item on?

import { settings } from 'carbon-components'

const { prefix } = settings;

const html = document.querySelector('html');
// const outlineClass = `${prefix}--specs--outline`;

function manageSpecsDependencies (specs, specType) {
    if (specs && specType === 'dependencies') {
        activateDependencies();
    } else {
        deactivateDependencies();
    }
}

function activateDependencies () {
    // html.classList.add(outlineClass);

    // .bx--grid, .bx--row, .bx--col, .bx--col-sm-#, .bx--col-md-# ...
    // add highlight
    // add tooltip
    console.log('activate dependencies');
}

function deactivateDependencies () {
    // html.classList.remove(outlineClass);
    console.log('de-activate dependencies');
}

export { manageSpecsDependencies };