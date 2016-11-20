import React, { PropTypes } from 'react';
import { Example, PropertiesTable } from 'components';
import './index.styl';

const ComponentPage = ({ title, description, props, url, examples, reactBootstrap }) =>
  <section className="react-component-page">
    <div className="component-information">
      <h1 className="component-title">{title}</h1>
      <p className="component-description">{description}</p>
    </div>
    {reactBootstrap && (
      <div>
        <p>This component is from <a href="https://react-bootstrap.github.io/">React-Bootstrap</a>, find more info about this component <a href={reactBootstrap}>here</a>. License: <a href="https://github.com/react-bootstrap/react-bootstrap/blob/master/LICENSE">MIT</a>.</p>
      </div>
    )}
    {examples.map((example, index) =>
      <Example
        key={index}
        url={url}
        component={example.component}
        code={example.code}
        title={example.title}
        showTitle={example.showTitle}
        exampleUrl={example.url}
        center={example.center}
      />
    )}
    { props && <PropertiesTable props={props} />}
  </section>;

ComponentPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  props: PropTypes.object,
  examples: PropTypes.array.isRequired,
  reactBootstrap: PropTypes.string
};

export default ComponentPage;
