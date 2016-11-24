import React from 'react';
import componentsIcon from '../../img/components-icon.svg';

const Components = () =>
  <div className="styleguide-section">
    <section className="jumbotron">
      <h2 dangerouslySetInnerHTML={{ __html: componentsIcon }} />
      <h1>Components</h1>
      <p>Set of components used across our website and apps.</p>
    </section>
    <section className="section-content">
      <section>
        <h2>Alert</h2>
      </section>
      <section>
        <h2>Buttons</h2>
      </section>
      <section>
        <h2>Try Banner</h2>
      </section>
    </section>
  </div>;

export default Components;
