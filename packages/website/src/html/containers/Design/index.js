import React from 'react';
import DesignIcon from '../../img/design-icon.svg';

const Design = () =>
  <div className="styleguide-section">
    <section className="jumbotron">
      <h2><DesignIcon /></h2>
      <h1>Design</h1>
      <p>“The only important thing about design is how it relates to people.”</p>
    </section>
    <section className="section-content">
      <section>
        <h2>Typography</h2>
      </section>
      <section>
        <h2>Primary colors</h2>
      </section>
      <section>
        <h2>Background colors</h2>
      </section>
    </section>
  </div>;

export default Design;
