import React from 'react';
import { render } from 'react-dom';

import ComponentPlayground from 'component-playground';
import Playground from './lib/react/playground/index';

import Select from './lib/react/select/index';
import EmptyState from './lib/react/empty-state/index';
import LoadingPanel from './lib/react/loading-panel/index';

const SelectExample = require('raw!./lib/react/select/example.txt');
const LoadingPanelExample = require('raw!./lib/react/loading-panel/example.txt');
const EmptyStateExample = require('raw!./lib/react/empty-state/example.txt');

class ReactComponents extends React.Component {
  render() {
    return (
      <section className="section content-styleguide">

        <Playground title="Select" description="Select component description text.">
          <ComponentPlayground
            codeText={SelectExample}
            scope={{ React, Select }}
            theme="auth0"
          />
        </Playground>

        <Playground title="Loading panel" description="Loading panel component description text.">
          <ComponentPlayground
            codeText={LoadingPanelExample}
            scope={{ React, LoadingPanel }}
            theme="auth0"
          />
        </Playground>

        <Playground title="Empty State" description="Empty state component description text.">
          <ComponentPlayground
            codeText={EmptyStateExample}
            scope={{ React, EmptyState }}
            theme="auth0"
          />
        </Playground>

      </section>
    );
  }
}

render(
  <ReactComponents />,
  document.getElementById('react-components-section')
);
