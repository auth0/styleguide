import React from 'react';
import Sidebar from './';
import sidebarExamples from './sidebar-items-example.json';

const examples = [
  {
    component: <Sidebar items={sidebarExamples.plain} />,
    code: `<Sidebar items={${sidebarExamples.plain}}>`,
    title: 'Styleguide (HTML/CSS)',
    url: 'styleguide-html-css'
  }
];

export default examples;
