// import { configure } from '@storybook/react';
import { addParameters, configure } from '@storybook/react';

import '../src/styles/index.scss';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Option defaults:
addParameters({
  options: {
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,
    theme: undefined,
  },
});

configure(loadStories, module);
