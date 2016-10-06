import React from 'react';
import { Select } from 'auth0-styleguide-react-components';

const ReactPage = () => (
  <section>
    <h1>React components</h1>

    <h2>Select:</h2>
    <Select options={["1", "2", "3"]} selected={1}/>
  </section>
);

export default ReactPage;
