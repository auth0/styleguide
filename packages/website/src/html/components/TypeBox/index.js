import React, { PropTypes } from 'react';

const TypeBox = ({ themeDark }) =>
  <div className={`column ${themeDark ? 'theme-dark' : ''}`}>
    <div className="type-box">
      { themeDark ? (
        <h5>Theme Dark: add the class <code>.theme-dark</code> to the parent container.</h5>
      ) : (
        <h5>Theme Light</h5>
      )}
      <h1>Headline 1</h1>
      <h2>Headline 2</h2>
      <h3>Headline 3</h3>
      <h4>Title</h4>
      <h5>Subheader</h5>
      <p className="body-2">Body 2 / Menu</p>
      <p className="body-1">Body 1</p>
      <p className="caption">Caption</p>
      <a href="http://styleguide.auth0.com/">Link</a>
    </div>
  </div>;

TypeBox.defaultProps = {
  themeDark: false
};

TypeBox.propTypes = {
  themeDark: PropTypes.bool
};

export default TypeBox;
