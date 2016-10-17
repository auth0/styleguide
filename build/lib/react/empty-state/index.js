import React, { Component, PropTypes } from 'react';
import styles from './index.styl';

class EmptyState extends Component {
  render() {
    const { title, icon, description } = this.props;
    return (
      <div className={styles.emptyState}>
        <h2 className={styles.emptyStateTitle}>{title}</h2>
        { icon }
        { description && <p className={styles.emptyStateDescription}>{description}</p> }
        <div className={styles.emptyStateButtons}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

EmptyState.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  description: PropTypes.string,
  children: PropTypes.node
};

export default EmptyState;
