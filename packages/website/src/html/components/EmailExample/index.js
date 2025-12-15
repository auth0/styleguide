import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import hljs from 'highlight.js';
import './index.styl';

class EmailExample extends Component {
  constructor() {
    super();
    this.state = { activeSection: 'email' };

    this.renderActions = this.renderActions.bind(this);
    this.renderSectionButton = this.renderSectionButton.bind(this);
    this.resizeIframe = this.resizeIframe.bind(this);
  }

  componentDidMount() {
    // Highlight code snippets
    hljs.configure({ classPrefix: '' });
    hljs.initHighlighting.called = false;
    hljs.highlightBlock(this.mjmlCode);
    hljs.highlightBlock(this.htmlCode);
  }

  resizeIframe() {
    this.iframe.style.height = `${this.iframe.contentWindow.document.body.scrollHeight}px`;
  }

  renderSectionButton(sectionID, sectionText) {
    return (
      <button
        onClick={() => {
          this.setState({ activeSection: sectionID });
        }}
        className={`btn btn-link ${this.state.activeSection === sectionID ? 'active' : ''}`}
      >
        {sectionText}
      </button>
    );
  }

  renderActions() {
    return (
      <ul className="html-example-actions">
        <li>{this.renderSectionButton('email', 'Email')}</li>
        <li>{this.renderSectionButton('mjml', 'MJML')}</li>
        <li>{this.renderSectionButton('html', 'HTML')}</li>
        <li>
          <Link
            to={`/email-templates/${this.props.id}/stage`}
            target="_blank"
            rel="noopener noreferrer"
          >
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
    const { title, description, mjml, html, id } = this.props;
    const { activeSection } = this.state;

    return (
      <section className="html-example email-component" id={id}>
        <h2>{title}</h2>
        {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
        {this.renderActions()}
        <div className="html-example-playground">
          <div
            style={activeSection !== 'email' ? { display: 'none' } : {}}
            className="example-component"
          >
            <iframe
              title="email-frame"
              className="email-iframe"
              srcDoc={html}
              ref={e => {
                this.iframe = e;
              }}
              onLoad={this.resizeIframe}
            />
          </div>
          <div style={activeSection !== 'mjml' ? { display: 'none' } : {}} className="example-mjml">
            <pre>
              <code
                ref={e => {
                  this.mjmlCode = e;
                }}
                className="mjml"
              >
                {mjml}
              </code>
            </pre>
          </div>
          <div style={activeSection !== 'html' ? { display: 'none' } : {}} className="example-html">
            <pre>
              <code
                ref={e => {
                  this.htmlCode = e;
                }}
                className="html"
              >
                {html}
              </code>
            </pre>
          </div>
        </div>
      </section>
    );
  }
}

EmailExample.defaultProps = {
  description: undefined
};

EmailExample.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  mjml: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default EmailExample;
