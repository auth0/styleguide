import React, { PropTypes, Component } from 'react';
import CodeMirror from 'codemirror';
import './index.styl';

class Example extends Component {
  constructor() {
    super();
    this.state = { activeSection: 'component' };

    this.highlightCode = this.highlightCode.bind(this);
    this.renderActions = this.renderActions.bind(this);
    this.renderSectionButton = this.renderSectionButton.bind(this);
  }

  componentDidMount() {
    this.highlightCode();
  }

  highlightCode() {
    CodeMirror.fromTextArea(this.pugCode, {
      lineNumbers: true,
      readOnly: true,
      theme: 'auth0',
      mode: 'pug'
    });

    CodeMirror.fromTextArea(this.htmlCode, {
      lineNumbers: true,
      readOnly: true,
      theme: 'auth0',
      mode: 'html'
    });
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
          <button className="btn btn-link open-in-stage-btn">
            Open in stage
            <i className="icon-budicon-519" />
          </button>
        </li>
      </ul>
    );
  }

  render() {
    const { title, description, pug, html, id } = this.props;
    const { activeSection } = this.state;

    return (
      <section className="html-example" id={id}>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        { this.renderActions() }
        <div className="html-example-playground">
          <div
            style={activeSection !== 'component' ? { display: 'none' } : {}}
            className="example-component"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div style={activeSection !== 'pug' ? { display: 'none' } : {}} className="example-pug">
            <textarea ref={e => (this.pugCode = e)} value={pug} />
          </div>
          <div style={activeSection !== 'html' ? { display: 'none' } : {}} className="example-html">
            <textarea ref={e => (this.htmlCode = e)} value={html} />
          </div>
        </div>
      </section>
    );
  }
}

Example.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pug: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Example;
