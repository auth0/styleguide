import React, { PropTypes, Component } from 'react';
import './index.styl';

class Example extends Component {
  constructor(props) {
    super();
    this.state = {
      darkMode: props.darkMode,
      activeSection: 'component'
    };
    this.renderActions = this.renderActions.bind(this);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }
  toggleDarkMode(event) {
    this.setState({ darkMode: event.target.checked });
  }
  renderActions() {
    const { title } = this.props;
    return (
      <ul className="html-example-actions">
        <div>
          <li onClick={() => { this.setState({ activeSection: 'component' }); }}>Component</li>
          <li onClick={() => { this.setState({ activeSection: 'pug' }); }}>Pug</li>
          <li onClick={() => { this.setState({ activeSection: 'html' }); }}>HTML</li>
        </div>
        <div>
          <li>
            <span>Dark mode</span>
            <div className="ui-switch">
              <input
                id={`${title.toLowerCase()}-dark-mode-input`}
                type="checkbox" checked={this.state.darkMode}
                onChange={this.toggleDarkMode}
              />
              <label htmlFor={`${title.toLowerCase()}-dark-mode-input`} className="status" />
            </div>
          </li>
          <li>
            <button className="btn btn-transparent btn-sm">Open in stage</button>
          </li>
        </div>
      </ul>
    );
  }
  render() {
    const { title, description, pug, html } = this.props;
    const { activeSection, darkMode } = this.state;

    return (
      <section className="html-example">
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        { this.renderActions() }
        <div className="html-example-playground">
          { activeSection === 'component' && (
            <div
              className={`example-component ${darkMode ? 'theme-dark' : ''}`}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          )}
          { activeSection === 'pug' && (
            <div className="example-pug">
              <pre className="hl">
                <code className="html">
                  {pug}
                </code>
              </pre>
            </div>
          )}
          { activeSection === 'html' && (
            <div className="example-html">
              <pre className="hl">
                <code className="html">
                  {html}
                </code>
              </pre>
            </div>
          )}
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
