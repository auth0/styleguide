import React, { Component, PropTypes } from 'react';
import styles from './index.styl';

const Select = (props) => {
  const { options, selected, label, color, handleChange } = props;

  return (
    <div className={styles.select}>
      { label && <span>{label}</span> }
      <span className={`${styles.value} text-truncate`} style={{ color }}>{options[selected]}</span>
      <i className="icon-budicon-460" />
      <select onChange={handleChange} {...props}>
        {
          options.map((name, index) => <option key={index} value={index} selected={index === selected}>{name}</option>)
        }
      </select>
    </div>
  );
};

Select.defaultProps = {
  options: [ 'Default' ],
  selected: 0,
  label: '',
  handleChange: () => {}
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  color: PropTypes.string
};

export default Select;
