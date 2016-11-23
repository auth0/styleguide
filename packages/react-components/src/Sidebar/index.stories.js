import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Sidebar from './';
import sidebarExamples from './examples.json';

storiesOf('Sidebar', module)
  .add('Styleguide (HTML/CSS)', () => (
    <Sidebar items={sidebarExamples.plain} />
  ));
