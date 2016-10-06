import React from 'react';
import { parse } from 'react-docgen';

const ComponentPage = ({ component }) => {
  const codeOfComponent = require(`raw!auth0-styleguide-react-components/src/components/${component.component.name}/index.js`);
  const parsedComments = parse(codeOfComponent);

  return (
    <section>
      <h1>React components</h1>

      <h2>{component.title}</h2>
    </section>
  );
};

export default ComponentPage;
