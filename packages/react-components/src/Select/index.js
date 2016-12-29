import React, { PropTypes } from 'react';

/**
 * Select: Drop-down list.
 */
const Select = ({ options, selected, label, color, handleChange }) =>
  <div className="a0r-select">
    { label && <span>{label}</span> }
    <span className="a0r-value text-truncate" style={{ color }}>{options[selected].label}</span>
    <i className="icon-budicon-460" />
    <select
      onChange={handleChange}
      value={options.reduce((prev, current, index) => {
        if (index === selected) return index;
        return prev;
      })}
    >
      { options.map((opt, index) => <option key={index} value={opt.value}>{opt.label}</option>) }
    </select>
  </div>;

Select.defaultProps = {
  selected: 0,
  label: '',
  handleChange: () => {}
};

Select.propTypes = {
  /**
   * List of options
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  /**
   * Index of default selected value
   */
  selected: PropTypes.number,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  color: PropTypes.string
};

export default Select;
