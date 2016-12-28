import React from 'react';
import EmailTemplatesIcon from '../../img/email-templates-icon.svg';
import { EmailExample, SVG } from '../../components';
import emailsConfig from './emails-config.json';

const emailsExamples = emailsConfig.reduce((acc, email) => {
  /* eslint-disable global-require */
  const mjmlFile = require(`!raw-loader!auth0-styleguide-components/src/emails/${email.folder}/demo.ejs`);
  const htmlFile = require(`!raw-loader!auth0-styleguide-components/build/emails/${email.folder}/demo.html`);
  /* eslint-enable global-require */

  return acc.concat({
    title: email.title,
    description: email.description,
    mjml: mjmlFile,
    html: htmlFile.split('\n').slice(1).join('\n'), // Remove first empty line
    id: email.folder
  });
}, []);

const Email = () =>
  <div className="styleguide-section">
    <section className="jumbotron">
      <h2><SVG content={EmailTemplatesIcon} /></h2>
      <h1>Email Templates</h1>
      <p>Build and send emails with style.</p>
    </section>
    <section className="section-content">
      {emailsExamples.map(example => <EmailExample key={example.title} {...example} />)}
    </section>
  </div>;

export default Email;
