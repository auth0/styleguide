'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint max-len: ["error", 100, { "ignoreComments": true }] */


/**
 * Try Banner: The main call to action to signup.
 */
function TryBanner(_ref) {
  var title = _ref.title,
      button = _ref.button,
      buttonAction = _ref.buttonAction,
      dark = _ref.dark,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['title', 'button', 'buttonAction', 'dark', 'className']);

  return _react2.default.createElement(
    'div',
    _extends({
      className: 'a0src-try-banner ' + className + ' ' + (dark ? 'a0src-try-banner--dark' : '')
    }, rest),
    _react2.default.createElement(
      'span',
      { className: 'a0src-try-banner__title' },
      title
    ),
    toString.call(buttonAction) === '[object String]' ? _react2.default.createElement(
      'a',
      {
        className: 'a0src-try-banner__button btn btn-success btn-lg',
        href: buttonAction
      },
      button
    ) : _react2.default.createElement(
      'button',
      {
        className: 'a0src-try-banner__button btn btn-success btn-lg',
        onClick: buttonAction
      },
      button
    )
  );
}

TryBanner.propTypes = {
  /**
   * Try Banner title.
   */
  title: _react.PropTypes.string,
  /**
   * Text for the button.
   */
  button: _react.PropTypes.string,
  /**
   * Action of the button when pressed, this can be a URL (the button will be an anchor tag) or a function (the button will be a button tag).
   */
  buttonAction: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
  /**
   * Display in dark mode if true.
   */
  dark: _react.PropTypes.bool,
  /**
   * Add CSS class selectors to the root element.
   */
  className: _react.PropTypes.string
};

TryBanner.defaultProps = {
  title: 'Don\'t have an account yet?',
  button: 'Try Auth0 for Free',
  buttonAction: '#',
  dark: false,
  className: ''
};

exports.default = TryBanner;