import React from 'react';
import resourcesIcon from '../../img/resources-icon.svg';

const Resources = () =>
  <div className="styleguide-section">
    <section className="jumbotron">
      <h2 dangerouslySetInnerHTML={{ __html: resourcesIcon }} />
      <h1>Resources</h1>
      <p>Logo, Icons and badges.</p>
    </section>
    <section className="section-content">
      <section>
        <h2>Logos</h2>
      </section>
      <section>
        <h2>Badges</h2>
      </section>
      <section>
        <h2>Icons</h2>
      </section>
    </section>
  </div>;

export default Resources;
