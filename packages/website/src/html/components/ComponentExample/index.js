import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import hljs from 'highlight.js';
import './index.styl';

class ComponentExample extends Component {
  constructor() {
    super();
    this.state = { activeSection: 'component' };

    this.renderActions = this.renderActions.bind(this);
    this.renderSectionButton = this.renderSectionButton.bind(this);
  }

  componentDidMount() {
    // Highlight code snippets
    hljs.configure({ classPrefix: '' });
    hljs.initHighlighting.called = false;
    hljs.highlightBlock(this.pugCode);
    hljs.highlightBlock(this.htmlCode);
  }

  renderSectionButton(sectionID, sectionText) {
    return (
      <button
        onClick={() => { this.setState({ activeSection: sectionID }); }}
        className={`btn btn-link ${this.state.activeSection === sectionID ? 'active' : ''}`}
      >
        {sectionText}
      </button>
    );
  }

  renderActions() {
    return (
      <ul className="html-example-actions">
        <li>{this.renderSectionButton('component', 'Component')}</li>
        <li>{this.renderSectionButton('pug', 'Pug')}</li>
        <li>{this.renderSectionButton('html', 'HTML')}</li>
        <li>
          <Link to={`/components/${this.props.id}/stage`} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-link open-in-stage-btn">
              Open in stage
              <i className="icon-budicon-519" />
            </button>
          </Link>
        </li>
      </ul>
    );
  }

  render() {
    /* eslint-disable react/no-danger */
    const { title, description, pug, html, id } = this.props;
    const { activeSection } = this.state;

    return (
      <section className="html-example" id={id}>
        <h2>{title}</h2>
        <div
          className="html-example-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        { this.renderActions() }
        <div className="html-example-playground">
          <div
            style={activeSection !== 'component' ? { display: 'none' } : {}}
            className="example-component"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div style={activeSection !== 'pug' ? { display: 'none' } : {}} className="example-pug">
            <pre>
              <code ref={e => (this.pugCode = e)} className="pug">{pug}</code>
            </pre>
          </div>
          <div style={activeSection !== 'html' ? { display: 'none' } : {}} className="example-html">
            <pre>
              <code ref={e => (this.htmlCode = e)} className="html">{html}</code>
            </pre>
          </div>
        </div>
      </section>
    );
  }
}

ComponentExample.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pug: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default ComponentExample;
