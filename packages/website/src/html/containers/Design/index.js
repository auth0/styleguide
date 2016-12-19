import React from 'react';
import DesignIcon from '../../img/design-icon.svg';
import { SVG, TypeBox } from '../../components';
import './index.styl';

const Design = () =>
  <div className="styleguide-section design-section">
    <section className="jumbotron">
      <h2><SVG content={DesignIcon} /></h2>
      <h1>Design</h1>
      <p>“The only important thing about design is how it relates to people.”</p>
    </section>
    <section className="section-content">
      <section>
        <h2 id="typography">Typography</h2>
        <p>The body font is set to Nitti Grotesk, font size is 16px and line height is 2.</p>
        <div className="row type-box-container">
          <TypeBox />
          <TypeBox themeDark />
        </div>
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
