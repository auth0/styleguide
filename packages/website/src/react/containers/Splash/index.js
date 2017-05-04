import React, { PropTypes } from 'react';
import hljs from 'highlight.js';
import './index.styl';

const example = `import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@auth0/styleguide-react-components';

const App = () => (
  <div>
    <Button>+1</Button>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);`;

const installationStylesheet = () =>
`<link rel="stylesheet" href="https://cdn.auth0.com/styleguide/react-components/1.0.1/react-components.css" />
<!-- It has two CSS peer dependencies, the core & components CSS bundles -->
<link rel="stylesheet" href="https://cdn.auth0.com/styleguide/core/2.0.4/core.min.css" />
<link rel="stylesheet" href="https://cdn.auth0.com/styleguide/components/1.0.8/components.min.css" />`;

class Splash extends React.Component {
  componentDidMount() {
    this.codeExamples = [].slice.call(document.querySelectorAll('.splash-page code'));
    hljs.configure({ classPrefix: '' });
    this.codeExamples.forEach((block) => {
      hljs.highlightBlock(block);
    });
  }

  componentDidUpdate() {
    hljs.configure({ classPrefix: '' });
    hljs.initHighlighting.called = false;
    this.codeExamples.forEach((block) => {
      hljs.highlightBlock(block);
    });
  }

  render() {
    return (
      <section className="splash-page">
        <h1 className="splash-title">Getting started</h1>

        <div className="splash-section">
          <h2 className="splash-subtitle">Installation</h2>

          <div className="example-box">
            <p>To install the latest version:</p>
            <pre>
              <code className="bash">
                {'npm i --save react@15 react-bootstrap@0.30 @auth0/styleguide-react-components'}
              </code>
            </pre>

            <p>Stylesheets:</p>
            <div className="example-box">
              <pre>
                <code className="html">{installationStylesheet(this.props.version)}</code>
              </pre>
            </div>
          </div>

          <div className="example-box">
            <h2 className="splash-subtitle">Example</h2>

            <p>Here is a quick example to get you started:</p>
            <pre>
              <code className="javascript">{example}</code>
            </pre>
          </div>
        </div>

      </section>
    );
  }
}

Splash.propTypes = {
  version: PropTypes.string.isRequired
};

export default Splash;
