import React, { Component, PropTypes } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import hljs from 'highlight.js';
import { CodepenPlayground } from '../';
import './index.styl';

class Example extends Component {
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
    const { component, code, title, componentName, showTitle, center } = this.props;
    return (
      <div className="react-playground">
        { (title && showTitle) && <h3 className="react-playground-title">{title}</h3> }
        <div className={`react-playground-component ${center ? 'center' : ''}`}>
          <div className="component-links">
            <CodepenPlayground componentName={componentName} exampleCode={code} />
          </div>
          <div className="react-playground-component-iframe">{component}</div>
        </div>
        <div className="react-playground-code">
          <CopyToClipboard text={code.trim()}>
            <button className="copy-code-btn btn btn-sm btn-success">Copy code</button>
          </CopyToClipboard>
          <pre>
            <code className="javascript" ref={(node) => { this.codeBlock = node; }}>
              {code.trim()}
            </code>
          </pre>
        </div>
      </div>
    );
  }
}

Example.propTypes = {
  component: PropTypes.element.isRequired,
  code: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  componentName: PropTypes.string.isRequired,
  showTitle: PropTypes.bool,
  center: PropTypes.bool
};

Example.defaultProps = {
  showTitle: true,
  center: false
};

export default Example;
