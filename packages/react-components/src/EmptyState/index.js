import React, { PropTypes } from 'react';

/**
 * Empty state: Simple component for onboarding users to sections with no data.
 */
const EmptyState = ({ title, description, iconCode, image, children }) =>
  <div className="empty-state">
    <h2 className="empty-state-title">{title}</h2>
    { image ||
      <div className="empty-state-icon">
        <i className={`icon-budicon-${iconCode}`} />
      </div>
    }
    { description && <p className="empty-state-description">{description}</p> }
    <div className="empty-state-children"> {children} </div>
  </div>;

EmptyState.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconCode: PropTypes.string,
  image: PropTypes.node,
  children: PropTypes.node
};

export default EmptyState;
