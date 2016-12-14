'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sidebarExamples = {
  plain: [{
    text: 'Getting started',
    iconCode: 464,
    children: [{
      text: 'From CDN'
    }, {
      text: 'Installing from Github'
    }]
  }, {
    text: 'Design',
    iconCode: 258,
    children: [{
      text: 'Typography'
    }, {
      text: 'Primary Colors'
    }, {
      text: 'Secondary Colors'
    }, {
      text: 'Background Colors'
    }, {
      text: 'Status Colors'
    }]
  }, {
    text: 'Components',
    iconCode: 690,
    children: [{
      text: 'Alert'
    }, {
      text: 'Buttons'
    }, {
      text: 'Try Banner'
    }]
  }, {
    text: 'Email templates',
    iconCode: 778,
    children: [{
      text: 'Newsletter'
    }, {
      text: 'Notifications'
    }, {
      text: 'Notices'
    }]
  }, {
    text: 'Resources',
    iconCode: 733,
    children: [{
      text: 'Logos'
    }, {
      text: 'Badges'
    }, {
      text: 'Icons'
    }]
  }]
};


(0, _storybook.storiesOf)('Sidebar', module).add('Styleguide (HTML/CSS)', function () {
  return _react2.default.createElement(_2.default, { items: sidebarExamples.plain });
});