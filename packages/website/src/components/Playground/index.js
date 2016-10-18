import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
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
    const { component, url, exampleUrl, code, title, center } = this.props;
    return (
      <div className="react-playground">
        { title && <h3 className="react-playground-title">{title}</h3> }
        <div className={`react-playground-component ${center ? 'center' : ''}`}>
          <div className="component-links">
            <Link to={`${url}/stage/${exampleUrl}`}>Open in stage</Link>
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
  title: PropTypes.string,
  center: PropTypes.bool
};

export default Playground;
