import React, { PropTypes } from "react";
import "./index.styl";

const ColorBox = ({ variable, color }) =>
  <div className="col-xs-12 col-sm-6 col-md-3">
    <div className="color-box" style={{ backgroundColor: color }}>
      <span className="color-info">
        <strong>{variable}</strong>
        <span>{color}</span>
      </span>
    </div>
  </div>;

ColorBox.propTypes = {
  variable: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default ColorBox;
