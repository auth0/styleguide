'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Showcase component differents usecases
/* eslint-disable jsx-a11y/href-no-hash */
var examples = [{
  component: _react2.default.createElement(
    _2.default,
    {
      title: 'Roles',
      description: ' Create and manage Roles (collection of permissions) for your applications which can then be added to groups.',
      iconCode: '291'
    },
    _react2.default.createElement(
      'a',
      { href: '#', className: 'btn btn-transparent' },
      ' Read more '
    ),
    _react2.default.createElement(
      'button',
      { className: 'btn btn-success' },
      _react2.default.createElement('i', { className: 'icon icon-budicon-473' }),
      ' Create your first role'
    )
  ),
  code: '\n<EmptyState\n  title="Roles"\n  description="\n    Create and manage Roles (collection of permissions)\n    for your applications which can then be added to groups."\n  iconCode="291"\n>\n  <a href="#" className="btn btn-transparent"> Read more </a>\n  <button className="btn btn-success">\n    <i className="icon icon-budicon-473" /> Create your first role\n  </button>\n</EmptyState>',
  title: 'Default',
  showTitle: false,
  url: 'default'
}];

exports.default = examples;