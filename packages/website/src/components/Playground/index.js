import React, { PropTypes } from 'react';
import ComponentPlayground from 'component-playground';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import './index.styl';

const SelectExample = `<Select
  options={[
    'Zoey Andrews',
    'Jerry Woods',
    'Marion Garza'
  ]}
  selected={2}
  handleChange={(e) => { console.log(e.target.value); }}
  label="Select user"
/>`;

const EmptyStateExample = '<EmptyState />';

const Playground = ({ component, example, name }) => (
  <div className="react-component-playground">
    <ComponentPlayground
      codeText={name === 'Select' ? SelectExample : EmptyStateExample}
      scope={{ React, [name]: component }}
    />
  </div>
);

Playground.propTypes = {
  component: PropTypes.any.isRequired,
  example: PropTypes.string,
  name: PropTypes.string
};

export default Playground;
