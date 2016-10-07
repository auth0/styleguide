import React, { PropTypes } from 'react';
import styles from './index.styl';

class Playground extends React.Component {
  componentDidMount() {
    hljs.configure({
      classPrefix: ''
    })
    hljs.initHighlighting();
  }
  render() {
    return (
      <div className="react-component-playground">
        { this.props.children }
        <div className="react-component-playground-code">
          <pre>
            <code className="javascript">
{`<Select
  options={[
    'Zoey Andrews',
    'Jerry Woods',
    'Marion Garza'
  ]}
  selected={2}
  handleChange={(e) => { console.log(e.target.value); }}
  label="Select user"
/>`}
            </code>
          </pre>
        </div>
      </div>
    );
  }
}

Playground.propTypes = {
  children: PropTypes.node.isRequired
};

export default Playground;
