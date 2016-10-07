import React from 'react';
import styles from './index.styl';
// import { parse } from 'react-docgen';

const ComponentPage = ({ component }) => {
  // const codeOfComponent = require(`raw!auth0-styleguide-react-components/src/${component.component.name}/index.js`);
  // const parsedComments = parse(codeOfComponent);

  return (
    <section className="react-component-page">
      <h1 className="component-title">{component.title}</h1>
      <p className="component-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, quos.
      </p>
      <table className="component-properties-table table table-fixed">
        <thead>
          <tr>
            <th width="15%">Property</th>
            <th width="15%">Type</th>
            <th width="60%">Description</th>
            <th width="10%">Required</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>array</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, non?</td>
            <td>true</td>
          </tr>
          <tr>
            <td>Property</td>
            <td>string</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, non?</td>
            <td>false</td>
          </tr>
          <tr>
            <td>Options</td>
            <td>array</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, non?</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ComponentPage;
