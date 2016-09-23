import React, { Component, PropTypes } from 'react';
import styles from './index.styl';

class Playground extends Component {
  render() {
    const { title, description, children } = this.props;
    const hashTitle = title.toLowerCase().replace(' ', '');

    return (
      <section>
        <h2 id={hashTitle}>{title}</h2>
        <p>{description}</p>
        {children}
      </section>
    );
  }
}

Playground.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Playground;
