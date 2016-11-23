'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _src = require('../../src');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('Select', module).add('with text', function () {
  return _react2.default.createElement(_src.Select, {
    options: ['Zoey Andrews', 'Jerry Woods', 'Marion Garza'],
    selected: 2,
    handleChange: function handleChange(e) {
      return (0, _storybook.action)('selected changed')(e.target.value);
    },
    label: 'Select user'
  });
});