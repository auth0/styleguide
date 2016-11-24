import React from 'react';
import Sidebar from './';
import sidebarExamples from './examples.json';

const examples = [
  {
    component: <Sidebar items={sidebarExamples.plain} />,
    code: `<Sidebar items={${JSON.stringify(sidebarExamples.plain)}} />`,
    title: 'Styleguide (HTML/CSS)',
    url: 'styleguide-html-css'
  }
];

export default examples;
