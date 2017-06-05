import React, { PropTypes } from "react";

const Badge = ({ title, name }) =>
  <div className="circle-logo" data-name={name}>
    <div className="logo" />
    <div className="title">{title}</div>
  </div>;

Badge.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Badge;
