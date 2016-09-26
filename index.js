import React from 'react';
import { render } from 'react-dom';

import ComponentPlayground from 'component-playground';
import Playground from './lib/react/playground/index';

import Select from './lib/react/select/index';
import SelectExample from './lib/react/select/example.txt';

import EmptyState from './lib/react/empty-state/index';
import EmptyStateExample from './lib/react/empty-state/example.txt';

import LoadingPanel from './lib/react/loading-panel/index';
import LoadingPanelExample from './lib/react/loading-panel/example.txt';


class ReactComponents extends React.Component {
  render() {
    const playgroundList = [
      {
        title: 'Select',
        description: 'Select component description text.',
        playground: {
          codeText: SelectExample,
          scope: { React, Select },
          docClass: Select,
          propDescriptionMap: {
            options: 'Array of select options.'
          }
        }
      },
      {
        title: 'Loading panel',
        description: 'Loading panel component description text.',
        playground: {
          codeText: LoadingPanelExample,
          scope: { React, LoadingPanel },
          docClass: LoadingPanel
        }
      },
      {
        title: 'Empty state',
        description: 'Empty state component description text.',
        playground: {
          codeText: EmptyStateExample,
          scope: { React, EmptyState },
          docClass: EmptyState
        }
      }
    ];
    return (
      <section className="section content-styleguide">
        { playgroundList.map((component) => {
          return (
            <Playground {...component} key={component.title}>
              <ComponentPlayground theme="auth0" {...component.playground} />
            </Playground>
          );
        }) }
      </section>
    );
  }
}

render(
  <ReactComponents />,
  document.getElementById('react-components-section')
);
