import React from 'react';
import { render } from 'react-dom';

import select from './lib/react/select/index';
import emptyState from './lib/react/empty-state/index';

window.React = React;

window.Styleguide = {
  "select": select,
  "emptyState": emptyState
}

window.Styleguide.create = (opts, elem) => {
  if(!window.Styleguide[opts.component]) {
    return;
  }

  opts.originElementContent = [].slice.call(elem.children);

  render(window.React.createElement(Styleguide[opts.component], opts), elem);

  return elem.parentNode.replaceChild(elem.firstChild, elem);
}

const domIdentifier = 'styleguide';

const domElements = () => {
  return document.querySelectorAll('['+ domIdentifier +']')
};

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

window.Styleguide.init = () => {
  return domElements().forEach((elem) => {
    var opts = getElementOptions(elem);

    return Styleguide.create(opts, elem);
  });
}

window.Styleguide.initElement = (elem) => {
  var opts = getElementOptions(elem);

  return window.Styleguide.create(opts, elem);
};

window.Styleguide.init();
