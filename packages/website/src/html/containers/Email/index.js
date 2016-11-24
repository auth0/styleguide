import React from 'react';
import emailTemplatesIcon from '../../img/email-templates-icon.svg';

const Email = () =>
  <div className="styleguide-section">
    <section className="jumbotron">
      <h2 dangerouslySetInnerHTML={{ __html: emailTemplatesIcon }} />
      <h1>Email Templates</h1>
      <p>Build and send emails with style.</p>
    </section>
    <section className="section-content">
      <section>
        <h2>Newsletter</h2>
      </section>
      <section>
        <h2>Notifications</h2>
      </section>
      <section>
        <h2>Notices</h2>
      </section>
    </section>
  </div>;

export default Email;
