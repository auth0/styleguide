import React from 'react';
import PropTypes from 'prop-types';

/**
 * Empty state: Simple component for onboarding users to sections with no data.
 */
const EmptyState = ({ title, description, iconCode, image, children }) =>
  <div className="a0r-empty-state">
    <h2 className="a0r-empty-state-title">{title}</h2>
    {image ||
      <div className="a0r-empty-state-icon">
        <i className={`icon-budicon-${iconCode}`} />
      </div>}
    {description && <p className="a0r-empty-state-description">{description}</p>}
    <div className="a0r-empty-state-children"> {children} </div>
  </div>;

EmptyState.defaultProps = {
  iconCode: '750',
  image: false,
  children: undefined
};

EmptyState.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconCode: PropTypes.string,
  image: PropTypes.node,
  children: PropTypes.node
};

export default EmptyState;
