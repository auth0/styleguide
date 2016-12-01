import React, { PropTypes } from 'react';
import './index.styl';

const LogoBox = ({ title, logo, logoClass, downloadLink }) =>
  <div className="col-xs-6">
    <div className={`logo-branding ${logoClass}`}>
      <h5>{title}</h5>
      {logo}
      <a href={downloadLink} target="_blank" rel="noopener noreferrer">Download</a>
    </div>
  </div>;

LogoBox.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  logoClass: PropTypes.string,
  downloadLink: PropTypes.string
};

export default LogoBox;
