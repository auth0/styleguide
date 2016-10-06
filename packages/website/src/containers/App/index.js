import React from 'react';
import { BrowserRouter, Match, Link } from 'react-router';
import { ReactPage } from '../';
import { Sidebar } from '../../components';
import styles from './index.styl';

const App = () => (
<BrowserRouter>
  <div>
    <Sidebar items={[
      {
        title: 'Alert',
        url: '/alert'
      },
      {
        title: 'Button',
        url: '/button'
      }
    ]}/>
    <main className="styleguide-content">
      <Match exactly pattern="/" component={ReactPage} />
    </main>
  </div>
</BrowserRouter>
);

export default App;
