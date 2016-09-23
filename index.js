import React from 'react';
import { render } from 'react-dom';

import ComponentPlayground from 'component-playground';
import Playground from './lib/react/playground/index';

import Select from './lib/react/select/index';
import EmptyState from './lib/react/empty-state/index';
import LoadingPanel from './lib/react/loading-panel/index';

const componentExample = require("raw!./lib/react/select/example");

class ReactComponents extends React.Component {
  render() {
    return (
      <section className="section content-styleguide">
        <Playground
          title="Select"
          description="Select component description text."
        >
          <ComponentPlayground codeText={componentExample} scope={{ React }} />
        </Playground>
        <Playground
          title="Loading panel"
          description="Loading panel component description text."
        >
          <LoadingPanel show>
            <div
              style={{
                width: '100%',
                height: '400px',
                backgroundColor: 'rgba(0, 0, 0, 0.2)'
              }}
            />
          </LoadingPanel>
        </Playground>
        <Playground
          title="Empty State"
          description="Empty state component description text."
        >
          <EmptyState
            title="Users"
            description="Empty state example text."
          >
          </EmptyState>
        </Playground>
      </section>
    );
  }
}

render(
  <ReactComponents />,
  document.getElementById('react-components-section')
);
