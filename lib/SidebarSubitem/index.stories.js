'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('SidebarSubitem', module).add('text prop', function () {
  return _react2.default.createElement(_2.default, { text: 'React' });
}).add('text and url prop', function () {
  return _react2.default.createElement(_2.default, { text: 'React', url: 'https://auth0.com' });
}).add('text, url and wrapper prop', function () {
  return _react2.default.createElement(_2.default, { text: 'React', url: 'https://auth0.com', wrapper: _react2.default.createElement('em', null) });
});