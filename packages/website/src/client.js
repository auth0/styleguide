import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { App } from './containers';

render(<App/>, document.querySelector('#app'));
