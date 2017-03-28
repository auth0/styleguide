import React from 'react';
import { upperFirst, camelCase } from 'lodash';
import EmailTemplatesIcon from '../../img/email-templates-icon.svg';
import { EmailExample, SVG } from '../../components';
import * as EmailsFiles from './emails';
import emailsConfig from './emails-config.json';

const emailsExamples = emailsConfig.reduce((acc, email) =>
  acc.concat({
    title: email.title,
    description: email.description,
    mjml: EmailsFiles[`${upperFirst(camelCase(email.title))}Mjml`],
    html: EmailsFiles[`${upperFirst(camelCase(email.title))}Html`],
    id: email.folder
  }), []);

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
