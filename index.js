import React from 'react';
import { render } from 'react-dom';

import select from './lib/select/index';

window.React = React;

window.Styleguide = {
  "select": select
}

window.Styleguide.create = (opts, elem) => {
  if(!Styleguide[opts.component]) {
    return;
  }

  render(window.React.createElement(Styleguide[opts.component], opts), elem);

  return elem.parentNode.replaceChild(elem.firstChild, elem);
}

const domIdentifier = 'styleguide';

const domElements = document.querySelectorAll('['+ domIdentifier +'], [data-'+ domIdentifier +']');

const getElementOptions = (elem) => {
  var attrs = {};

  Array.prototype.slice.call(elem.attributes).forEach(function(item) {
    var name = item.name.replace('data-', '');
    var value = item.value;

    if(item.name === domIdentifier) {
      name = "component";
    }

    if(value.charAt(0) === '[' && value.substr(value.length - 1) === ']') {
      value = item.value
        .replace(/[\[\]']/g, '')
        .replace("'", '')
        .split(',')
    }

    if(!isNaN(value)) {
      value = parseInt(value);
    }

    if(value === "true" || value === "false") {
      value = (value === "true");
    }

    return attrs[name] = value;
  });

  return attrs;
};

domElements.forEach((elem) => {
  var opts = getElementOptions(elem);

  return Styleguide.create(opts, elem);
});
