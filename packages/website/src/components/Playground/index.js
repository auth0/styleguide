import React, { PropTypes } from 'react';
import './index.styl';

class Playground extends React.Component {
  componentDidMount() {
    hljs.highlightBlock(this.codeBlock);
  }
  componentDidUpdate() {
    hljs.initHighlighting.called = false;
    hljs.highlightBlock(this.codeBlock);
  }
  render() {
    const { component, code, title } = this.props;
    return (
      <div className="react-component-playground">
        {title}
        {component}
        <pre>
          <code className="javascript" ref={node => this.codeBlock = node}>
            {code}
          </code>
        </pre>
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
