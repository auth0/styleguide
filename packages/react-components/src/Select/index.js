import React, { PropTypes } from 'react';

/**
 * Select: Drop-down list.
 */
const Select = ({ options, selected, label, color, handleChange }) => (
  <div className="select">
    { label && <span>{label}</span> }
    <span className="value text-truncate" style={{ color }}>{options[selected]}</span>
    <i className="icon-budicon-460" />
    <select
      onChange={handleChange}
      value={options.reduce((prev, current, index) => {
        if (index === selected) return index;
        return prev;
      })}
    >
      {options.map((name, index) =>
        <option key={index} value={index}>{name}</option>
      )}
    </select>
  </div>
);

Select.defaultProps = {
  options: ['Default'],
  selected: 0,
  label: '',
  handleChange: () => {}
};

Select.propTypes = {
  /**
   * List of options
   */
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Index of default selected value
   */
  selected: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  color: PropTypes.string
};

export default Select;
