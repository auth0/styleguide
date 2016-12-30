'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _reactStorybookDecoratorCentered = require('@kadira/react-storybook-decorator-centered');

var _reactStorybookDecoratorCentered2 = _interopRequireDefault(_reactStorybookDecoratorCentered);

var _src = require('../../src');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('Select', module).addDecorator(_reactStorybookDecoratorCentered2.default).add('with text', function () {
  return _react2.default.createElement(_src.Select, {
    options: [{ label: 'Zoey Andrews', value: 'Zoey Andrews' }, { label: 'Jerry Woods', value: 'Jerry Woods' }, { label: 'Marion Garza', value: 'Marion Garza' }],
    selected: 0,
    handleChange: function handleChange(e, opt) {
      return (0, _storybook.action)('selected changed')(e.target.value, opt);
    },
    label: 'Select user'
  });
});