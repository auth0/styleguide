import React from 'react';
import { BrowserRouter, Match, Link } from 'react-router';
import { ReactPage } from '../';

const App = () => (
<BrowserRouter>
  <div>
    {/* init: this should be the Header/Sidebar component (src/components/Header|Sidebar) */}
    <ul>
      <li><Link to="/">Home</Link></li>
    </ul>
    {/* finish: this should be the Header/Sidebar component (src/components/Header|Sidebar) */}
    <main>
      <Match exactly pattern="/" component={ReactPage} />
    </main>
  </div>
</BrowserRouter>
);

export default App;
