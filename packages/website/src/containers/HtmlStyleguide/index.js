import React from 'react';
import { Sidebar } from 'auth0-styleguide-react-components';

const sidebarItems = [
  {
    text: 'Getting started',
    iconCode: 464,
    children: [{ text: 'From CDN' }, { text: 'Installing from Github' }]
  },
  {
    text: 'Design',
    iconCode: 258,
    children: [{ text: 'Typography' },
      { text: 'Primary Colors' },
      { text: 'Secondary Colors' },
      { text: 'Background Colors' },
      { text: 'Status Colors' }
    ]
  },
  {
    text: 'Components',
    iconCode: 690,
    children: [
      { text: 'Alert' },
      { text: 'Buttons' },
      { text: 'Try Banner' }
    ]
  },
  {
    text: 'Email templates',
    iconCode: 778,
    children: [
      { text: 'Newsletter' },
      { text: 'Notifications' },
      { text: 'Notices' }
    ]
  },
  {
    text: 'Resources',
    iconCode: 733,
    children: [
      { text: 'Logos' },
      { text: 'Badges' },
      { text: 'Icons' }
    ]
  }
];

const HtmlStyleguide = () =>
  <div className="auth0-html-styleguide">
    <Sidebar items={sidebarItems} />
  </div>;

export default HtmlStyleguide;
