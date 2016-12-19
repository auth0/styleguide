import React, { PropTypes } from 'react';
import './index.styl';

const editorCSSFiles = [
  'https://cdn.auth0.com/styleguide/core/development/core.min.css',
  'https://cdn.auth0.com/styleguide/components/development/components.min.css',
  'https://cdn.auth0.com/styleguide/react-components/development/react-components.min.css'
];

const editorJSFiles = [
  'https://cdnjs.cloudflare.com/ajax/libs/react/15.4.1/react.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/react/15.4.1/react-dom.min.js',
  'https://cdn.auth0.com/styleguide/react-components/development/react-components.min.js'
];

const htmlTemplate = '<div id="app" />';

const jsTemplate = (name, code) => (
`const ${name} = auth0StyleguideReactComponents.${name};

const App = () => ${code};

ReactDOM.render(
  <App />,
  document.getElementById('app')
)`
);

const codepenConfig = (name, code) => ({
  title: `Auth0 React Components - ${name}`,
  editors: '001',
  html: htmlTemplate,
  js: jsTemplate(name, code),
  js_pre_processor: 'babel',
  head: '',
  css_external: `${editorCSSFiles.join(';')}`,
  js_external: `${editorJSFiles.join(';')}`
});

const CodepenPlayground = ({ componentName, exampleCode }) =>
  <form action="http://codepen.io/pen/define" method="POST" target="_blank">
    <input
      type="hidden" name="data"
      value={JSON.stringify(codepenConfig(componentName, exampleCode))}
    />
    <input className="open-in-codepen-btn btn btn-link" type="submit" value="Open in Codepen" />
  </form>;

CodepenPlayground.propTypes = {
  componentName: PropTypes.string.isRequired,
  exampleCode: PropTypes.string.isRequired
};

export default CodepenPlayground;
