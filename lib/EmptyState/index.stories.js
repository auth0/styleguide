'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _src = require('../../src');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('EmptyState', module).add('default', function () {
  return _react2.default.createElement(_src.EmptyState, {
    title: 'Roles',
    description: 'Create and manage Roles (collection of permissions)\n        for your applications which can then be added to groups.',
    iconCode: '300'
  });
}).add('with children', function () {
  return _react2.default.createElement(
    _src.EmptyState,
    {
      title: 'Roles',
      description: 'Create and manage Roles (collection of permissions)\n        for your applications which can then be added to groups.',
      iconCode: '291'
    },
    _react2.default.createElement(
      'button',
      { href: '#', className: 'btn btn-transparent' },
      ' Read more '
    ),
    _react2.default.createElement(
      'button',
      { className: 'btn btn-success' },
      _react2.default.createElement('i', { className: 'icon icon-budicon-473' }),
      ' Create your first role'
    )
  );
});