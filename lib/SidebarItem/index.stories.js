'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _ = require('./');

var _2 = _interopRequireDefault(_);

var _3 = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('SidebarItem', module).add('text prop', function () {
  return _react2.default.createElement(_2.default, { text: 'Auth0' });
}).add('text and icon prop', function () {
  return _react2.default.createElement(_2.default, { text: 'Auth0', icon: 12 });
}).add('text, icon and arrow prop', function () {
  return _react2.default.createElement(_2.default, { text: 'Auth0', icon: 12, arrow: true });
}).add('text, icon and arrow prop', function () {
  return _react2.default.createElement(_2.default, { text: 'Auth0', icon: 12, arrow: true });
}).add('text, icon, arrow and wrapper prop', function () {
  return _react2.default.createElement(_2.default, { text: 'Auth0', icon: 12, wrapper: _react2.default.createElement('em', null), arrow: true });
}).add('text, icon and arrow prop with SidebarSubitem\'s as children closed', function () {
  return _react2.default.createElement(
    _2.default,
    { text: 'Auth0', icon: 12, arrow: true },
    _react2.default.createElement(_3.SidebarSubitem, { text: 'Lock' }),
    _react2.default.createElement(_3.SidebarSubitem, { text: 'Passwordless' }),
    _react2.default.createElement(_3.SidebarSubitem, { text: 'Breached Password' })
  );
}).add('text, icon and arrow prop with SidebarSubitem\'s as children open', function () {
  return _react2.default.createElement(
    _2.default,
    { text: 'Auth0', icon: 12, url: 'https://auth0.com', arrow: true, open: true },
    _react2.default.createElement(_3.SidebarSubitem, { text: 'Lock' }),
    _react2.default.createElement(_3.SidebarSubitem, { text: 'Passwordless' }),
    _react2.default.createElement(_3.SidebarSubitem, { text: 'Breached Password' })
  );
});