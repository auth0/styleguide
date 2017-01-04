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
      // Pass event and selected option object to onChange handler
      onChange={e => handleChange(e, options.filter(opt => opt.value === e.target.value)[0])}
      value={options[selected].value}
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
  /**
   * Handler for option change, it receives two parameters:
   * the event and the selected option object.
   */
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  color: PropTypes.string
};

export default Select;
