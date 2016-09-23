import React from 'react';
import { render } from 'react-dom';

import Playground from './lib/react/playground/index';

import Select from './lib/react/select/index';
import EmptyState from './lib/react/empty-state/index';


// window.React = React;

// Init react components section as react component

class ReactComponents extends React.Component {
  render() {
    return (
      <section className="section content-styleguide">
        <Playground
          title="Select"
          description="Select component description text."
        >
          <Select
            options={[ 'Location', 'Position', 'Name' ]}
          />
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

//

// window.Styleguide = {
//   "select": select,
//   "emptyState": emptyState,
//   "extensionHeader": extensionHeader
// }
//
// window.Styleguide.create = (opts, elem) => {
//   if(!window.Styleguide[opts.component]) {
//     return;
//   }
//
//   opts.originElementContent = [].slice.call(elem.children);
//
//   render(window.React.createElement(Styleguide[opts.component], opts), elem);
//
//   return elem.parentNode.replaceChild(elem.firstChild, elem);
// }
//
// const domIdentifier = 'styleguide';
//
// const domElements = () => {
//   return document.querySelectorAll('['+ domIdentifier +']')
// };
//
// const getElementOptions = (elem) => {
//   var attrs = {};
//
//   Array.prototype.slice.call(elem.attributes).forEach(function(item) {
//     var name = item.name.replace('data-', '');
//     var value = item.value;
//
//     if(item.name === domIdentifier) {
//       name = "component";
//     }
//
//     if(value.charAt(0) === '[' && value.substr(value.length - 1) === ']') {
//       value = item.value
//         .replace(/[\[\]']/g, '')
//         .replace("'", '')
//         .split(',')
//     }
//
//     if(!isNaN(value)) {
//       value = parseInt(value);
//     }
//
//     if(value === "true" || value === "false") {
//       value = (value === "true");
//     }
//
//     return attrs[name] = value;
//   });
//
//   return attrs;
// };
//
// window.Styleguide.init = () => {
//   return domElements().forEach((elem) => {
//     var opts = getElementOptions(elem);
//
//     return Styleguide.create(opts, elem);
//   });
// }
//
// window.Styleguide.initElement = (elem) => {
//   var opts = getElementOptions(elem);
//
//   return window.Styleguide.create(opts, elem);
// };
//
// window.Styleguide.init();
