import React, { Component } from 'react';
import hljs from 'highlight.js';
import $ from 'jquery';

const cdnExample = `<link rel="stylesheet" href="https://cdn.auth0.com/styleguide/core/2.0.5/core.min.css" />
<link rel="stylesheet" href="https://cdn.auth0.com/styleguide/components/2.0.0/components.min.css" />`;
const npmExample = `npm install --save @auth0/styleguide-core
npm install --save @auth0/styleguide-components`;

const highlightSnippets = () => {
  hljs.configure({
    tabReplace: '  ', // 4 spaces
    classPrefix: '' // don't append class prefix
  });

  hljs.initHighlighting();

  $('pre.hl code').each((i, block) => hljs.highlightBlock(block));
};

class GettingStarted extends Component {
  componentDidMount() {
    highlightSnippets();
  }

  render() {
    /* eslint-disable max-len */
    return (
      <div className="styleguide-section getting-started-section">
        <section className="jumbotron">
          <h2>
            <img
              src="https://cdn.auth0.com/website/styleguide/getting-started-icon.svg"
              alt="Getting started icon"
            />
          </h2>
          <h1>Getting Started</h1>
          <p>There are few ways to initialize depending on the use case.</p>
        </section>
        <div className="section-content">
          <section>
            <h2 id="installing-from-cdn">Installing from CDN</h2>
            <p>
              Using our CDN is the prefered solution.
              Just add the following lines in your projects HTML head and you
              are done.
            </p>
            <pre className="hl">
              <code className="html">{cdnExample}</code>
            </pre>
          </section>
          <section>
            <h2 id="installing-from-npm">Installing from NPM</h2>
            <p>
              Download the packages from NPM if you need to access to the stylus
              mixins or variables.
              You can see more information in the
              {' '}
              <a
                href="https://github.com/auth0/styleguide"
                target="_blank"
                rel="noopener noreferrer"
              >
                project README.
              </a>
            </p>
            <pre className="hl">
              <code className="bash">
                {npmExample}
              </code>
            </pre>
          </section>
        </div>
      </div>
    );
  }
}

export default GettingStarted;
