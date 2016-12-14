'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var codeExample1 = '<div>\n  {/* Standard button */}\n  <Button>Default</Button>\n\n  {/* Provides extra visual weight and identifies the primary action in a set of buttons */}\n  <Button bsStyle="primary">Primary</Button>\n\n  {/* Indicates a successful or positive action */}\n  <Button bsStyle="success">Success</Button>\n\n  {/* Contextual button for informational alert messages */}\n  <Button bsStyle="info">Info</Button>\n\n  {/* Indicates caution should be taken with this action */}\n  <Button bsStyle="warning">Warning</Button>\n\n  {/* Indicates a dangerous or potentially negative action */}\n  <Button bsStyle="danger">Danger</Button>\n\n  {/* Deemphasize a button by making it look like a link while maintaining button behavior */}\n  <Button bsStyle="link">Link</Button>\n</div>';

var examples = [{
  component: _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _.Button,
      null,
      'Default'
    ),
    '\xA0\xA0',
    _react2.default.createElement(
      _.Button,
      { bsStyle: 'primary' },
      'Primary'
    ),
    '\xA0\xA0',
    _react2.default.createElement(
      _.Button,
      { bsStyle: 'success' },
      'Success'
    ),
    '\xA0\xA0',
    _react2.default.createElement(
      _.Button,
      { bsStyle: 'info' },
      'Info'
    ),
    '\xA0\xA0',
    _react2.default.createElement(
      _.Button,
      { bsStyle: 'warning' },
      'Warning'
    ),
    '\xA0\xA0',
    _react2.default.createElement(
      _.Button,
      { bsStyle: 'danger' },
      'Danger'
    ),
    '\xA0\xA0',
    _react2.default.createElement(
      _.Button,
      { bsStyle: 'link' },
      'Link'
    ),
    '\xA0\xA0'
  ),
  code: codeExample1,
  center: true,
  title: 'Default',
  showTitle: false,
  url: 'default'
}];

exports.default = examples;