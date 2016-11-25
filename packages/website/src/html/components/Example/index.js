import React, { PropTypes, Component } from 'react';

class Example extends Component {
  render() {
    const { title, description, darkMode, pug, html } = this.props;
    return (
      <section className="html-example">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="html-example-playground">
          Jade content: {pug}
        </div>
      </section>
    );
  }
}

Example.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  darkMode: PropTypes.bool,
  pug: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired
};

export default Example;
