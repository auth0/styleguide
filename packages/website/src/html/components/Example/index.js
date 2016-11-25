import React, { PropTypes, Component } from 'react';

class Example extends Component {
  render() {
    const { title, description, darkMode, pug, html } = this.props;
    return (
      <section className="html-example">
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <div className="html-example-playground">
          <div>
            Component:
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <div>
            PUG:
            <pre className="hl">
              <code className="html">
                {pug}
              </code>
            </pre>
          </div>
          <div>
            HTML:
            <pre className="hl">
              <code className="html">
                {html}
              </code>
            </pre>
          </div>
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
