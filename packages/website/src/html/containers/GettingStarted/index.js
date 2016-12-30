import React, { Component } from 'react';
import hljs from 'highlight.js';
import $ from 'jquery';
import { SVG } from '../../components';
import GettingStartedIcon from '../../img/getting-started-icon.svg';

const cdnExample = '<link href="https://cdn.auth0.com/styleguide/0.0.1/index.min.css" rel="stylesheet" />';
const githubExample = (
`git clone https://github.com/auth0/styleguide.git
cd styleguide
grunt dev`
);

class GettingStarted extends Component {
  constructor() {
    super();

    this.highlightSnippets = this.highlightSnippets.bind(this);
  }

  componentDidMount() {
    this.highlightSnippets();
  }

  highlightSnippets() {
    hljs.configure({
      tabReplace: '  ', // 4 spaces
      classPrefix: ''   // don't append class prefix
    });

    hljs.initHighlighting();

    $('pre.hl code').each((i, block) => (hljs.highlightBlock(block)));
  }

  render() {
    return (
      <div className="styleguide-section getting-started-section">
        <section className="jumbotron">
          <h2><SVG content={GettingStartedIcon} /></h2>
          <h1>Getting Started</h1>
          <p>There are few ways to initialize depending on the use case.</p>
        </section>
        <div className="section-content">
          <section>
            <h2 id="installing-from-cdn">Installing from CDN</h2>
            <p>
              Using our CDN is the simplest solution.
              Just add the following lines in your projects HTML head and you are done.
            </p>
            <pre className="hl">
              <code className="html">{cdnExample}</code>
            </pre>
          </section>
          <section>
            <h2 id="installing-from-github">Installing from Github</h2>
            <p>
              Clone the repository to your computer. If you want more information
              <a
                href="https://github.com/auth0/styleguide/blob/master/README.md"
                target="_blank" rel="noopener noreferrer"
              >
                read here.
              </a>
            </p>
            <pre className="hl">
              <code className="html">
                {githubExample}
              </code>
            </pre>
          </section>
        </div>
      </div>
    );
  }
}

export default GettingStarted;

