import React, { PropTypes } from "react";
import "./index.styl";

const Icon = ({ cssClass, name }) =>
  <div className="icon-showcase">
    <i className={`${cssClass} icon`} aria-hidden="true" />
    <div className="icon-content">
      {name && <span className="name">{name}</span>}
      <span className="css-class">{cssClass}</span>
    </div>
  </div>;

Icon.propTypes = {
  cssClass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Icon;
