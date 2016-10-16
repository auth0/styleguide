import React, { Component, PropTypes } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import hljs from 'highlight.js'
import './index.styl';

class Playground extends Component {
  componentDidMount() {
    hljs.configure({ classPrefix: '' });
    hljs.highlightBlock(this.codeBlock);
  }

  componentDidUpdate() {
    hljs.configure({ classPrefix: '' });
    hljs.initHighlighting.called = false;
    hljs.highlightBlock(this.codeBlock);
  }

  render() {
    const { component, code, title } = this.props;
    return (
      <div className="react-playground">
        { title && <h3 className="react-playground-title">{title}</h3> }
        <div className="react-playground-component">
          <div className="component-links">
            <a href="#">Open in stage</a>
          </div>
          {component}
        </div>
        <div className="react-playground-code">
          <CopyToClipboard text={code.trim()}>
            <button className="copy-code-btn btn btn-sm btn-success">Copy code</button>
          </CopyToClipboard>
          <pre>
            <code className="javascript" ref={node => { this.codeBlock = node; }}>
              {code.trim()}
            </code>
          </pre>
        </div>
      </div>
    );
  }
}

Playground.propTypes = {
  component: PropTypes.any.isRequired,
  code: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default Playground;
