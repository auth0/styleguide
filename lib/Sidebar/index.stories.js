'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _ = require('./');

var _2 = _interopRequireDefault(_);

var _3 = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SidebarState = function (_Component) {
  _inherits(SidebarState, _Component);

  function SidebarState() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SidebarState);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SidebarState.__proto__ || Object.getPrototypeOf(SidebarState)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: false
    }, _this.toggleSidebarNav = function () {
      _this.setState(function (prevState) {
        return { isOpen: !prevState.isOpen };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SidebarState, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var WebtaskHeader = function WebtaskHeader() {
        return _react2.default.createElement('img', {
          src: 'https://webtask.io/images/symbol.svg',
          height: '40',
          alt: 'Webtask logo',
          style: { marginTop: '15px' }
        });
      };
      return _react2.default.createElement(
        _2.default,
        {
          isOpen: this.state.isOpen,
          toggleNavOnClick: function toggleNavOnClick() {
            return _this2.toggleSidebarNav();
          },
          header: this.props.webtaskHeader ? _react2.default.createElement(WebtaskHeader, null) : null
        },
        _react2.default.createElement(
          _3.SidebarItem,
          { text: 'Products', icon: 12 },
          _react2.default.createElement(_3.SidebarSubitem, {
            text: 'Lock',
            wrapper: _react2.default.createElement('a', { href: 'https://auth0.com/lock' })
          }),
          _react2.default.createElement(_3.SidebarSubitem, {
            text: 'Passwordless',
            wrapper: _react2.default.createElement('a', { href: 'https://auth0.com/passwordless' })
          }),
          _react2.default.createElement(_3.SidebarSubitem, {
            text: 'Breached Password',
            wrapper: _react2.default.createElement('a', { href: 'https://auth0.com/breached-passwords' })
          })
        ),
        _react2.default.createElement(_3.SidebarItem, {
          text: 'Pricing',
          icon: 1,
          wrapper: _react2.default.createElement('a', { href: 'https://auth0.com/pricing' })
        })
      );
    }
  }]);

  return SidebarState;
}(_react.Component);

SidebarState.propTypes = {
  webtaskHeader: _react.PropTypes.bool
};
SidebarState.defaultProps = {
  webtaskHeader: false
};


(0, _storybook.storiesOf)('Sidebar', module).add('Sidebar with SidebarItem and SidebarSubitem childrens', function () {
  return _react2.default.createElement(SidebarState, null);
}).add('Sidebar with SidebarItem and SidebarSubitem childrens and header prop', function () {
  return _react2.default.createElement(SidebarState, { webtaskHeader: true });
});