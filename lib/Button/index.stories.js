'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _reactStorybookDecoratorCentered = require('@kadira/react-storybook-decorator-centered');

var _reactStorybookDecoratorCentered2 = _interopRequireDefault(_reactStorybookDecoratorCentered);

var _src = require('../../src');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('Button', module).addDecorator(_reactStorybookDecoratorCentered2.default).add('Button styles', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _src.Button,
      null,
      'Default'
    ),
    ' \xA0\xA0',
    _react2.default.createElement(
      _src.Button,
      { bsStyle: 'primary' },
      'Primary'
    ),
    ' \xA0\xA0',
    _react2.default.createElement(
      _src.Button,
      { bsStyle: 'success' },
      'Success'
    ),
    ' \xA0\xA0',
    _react2.default.createElement(
      _src.Button,
      { bsStyle: 'info' },
      'Info'
    ),
    ' \xA0\xA0',
    _react2.default.createElement(
      _src.Button,
      { bsStyle: 'warning' },
      'Warning'
    ),
    ' \xA0\xA0',
    _react2.default.createElement(
      _src.Button,
      { bsStyle: 'danger' },
      'Danger'
    ),
    ' \xA0\xA0',
    _react2.default.createElement(
      _src.Button,
      { bsStyle: 'link' },
      'Link'
    )
  );
});