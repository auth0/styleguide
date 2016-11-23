(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-bootstrap')) :
  typeof define === 'function' && define.amd ? define('auth0-styleguide-react-components', ['exports', 'react', 'react-bootstrap'], factory) :
  (factory((global.auth0StyleguideReactComponents = global.auth0StyleguideReactComponents || {}),global.React,global.ReactBootstrap));
}(this, (function (exports,React,reactBootstrap) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;

/**
 * Empty state: Simple component for onboarding users to sections with no data.
 */
var EmptyState = function EmptyState(_ref) {
  var title = _ref.title,
      description = _ref.description,
      iconCode = _ref.iconCode,
      image = _ref.image,
      children = _ref.children;
  return React__default.createElement(
    "div",
    { className: "empty-state" },
    React__default.createElement(
      "h2",
      { className: "empty-state-title" },
      title
    ),
    image || React__default.createElement(
      "div",
      { className: "empty-state-icon" },
      React__default.createElement("i", { className: "icon-budicon-" + iconCode })
    ),
    description && React__default.createElement(
      "p",
      { className: "empty-state-description" },
      description
    ),
    React__default.createElement(
      "div",
      { className: "empty-state-children" },
      " ",
      children,
      " "
    )
  );
};

EmptyState.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  iconCode: React.PropTypes.string,
  image: React.PropTypes.node,
  children: React.PropTypes.node
};

/**
 * Footer: Auth0's footer component.
 */
var Footer = function Footer() {
  return React__default.createElement(
    "footer",
    { className: "site-footer" },
    React__default.createElement(
      "div",
      { className: "container" },
      React__default.createElement(
        "div",
        { className: "logo" },
        React__default.createElement("img", {
          src: "https://cdn.auth0.com/styleguide/latest/lib/logos/img/badge.png",
          width: "30",
          role: "presentation"
        })
      ),
      React__default.createElement(
        "div",
        { className: "footer-grid" },
        React__default.createElement(
          "div",
          { className: "column" },
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "h6",
              null,
              "Product"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/pricing" },
              "Pricing"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/why-auth0" },
              "Why Auth0"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/how-it-works" },
              "How It Works"
            )
          )
        ),
        React__default.createElement(
          "div",
          { className: "column" },
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "h6",
              null,
              "Company"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/about" },
              "About Us"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/blog" },
              "Blog"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/jobs" },
              "Jobs"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/press" },
              "Press"
            )
          )
        ),
        React__default.createElement(
          "div",
          { className: "column" },
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "h6",
              null,
              "Security"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/availability-trust" },
              "Availability & Trust"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/security" },
              "Security"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/whitehat" },
              "White Hat"
            )
          )
        ),
        React__default.createElement(
          "div",
          { className: "column" },
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "h6",
              null,
              "Learn"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://support.auth0.com" },
              "Help & Support"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/docs" },
              "Documentation"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/opensource" },
              "Open Source"
            )
          )
        ),
        React__default.createElement(
          "div",
          { className: "column" },
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "h6",
              null,
              "Extend"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/lock" },
              "Lock"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/wordpress" },
              "WordPress"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/docs/apiv2" },
              "API Explorer"
            )
          )
        ),
        React__default.createElement(
          "div",
          { className: "contact" },
          React__default.createElement(
            "div",
            { className: "column" },
            React__default.createElement(
              "div",
              { className: "item" },
              React__default.createElement(
                "h6",
                null,
                "Contact"
              )
            ),
            React__default.createElement(
              "div",
              { className: "item item-text" },
              "10900 NE 8th Street",
              React__default.createElement("br", null),
              "Suite 700",
              React__default.createElement("br", null),
              "Bellevue, WA   98004"
            )
          ),
          React__default.createElement(
            "div",
            { className: "column no-heading" },
            React__default.createElement(
              "div",
              { className: "item" },
              React__default.createElement(
                "a",
                { href: "tel:+18882352699" },
                "+1 (888) 235-2699"
              )
            ),
            React__default.createElement(
              "div",
              { className: "item" },
              React__default.createElement(
                "a",
                { href: "tel:+14253126521" },
                "+1 (425) 312-6521"
              )
            ),
            React__default.createElement(
              "div",
              { className: "item" },
              React__default.createElement(
                "a",
                { href: "https://support.auth0.com" },
                "Support Center"
              )
            )
          )
        )
      ),
      React__default.createElement(
        "div",
        { className: "colophon" },
        React__default.createElement(
          "div",
          { className: "column" },
          React__default.createElement(
            "div",
            { className: "social" },
            React__default.createElement(
              "div",
              { className: "twitter" },
              React__default.createElement("iframe", {
                allowTransparency: "true",
                frameBorder: "0",
                scrolling: "no",
                src: "//platform.twitter.com/widgets/follow_button.html?screen_name=auth0",
                className: "twitter"
              })
            ),
            React__default.createElement(
              "div",
              { className: "facebook" },
              React__default.createElement("iframe", {
                // eslint-disable-next-line max-len
                src: "//www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fgetauth0&width&layout=button_count&action=like&show_faces=false&show_count=false&share=false&height=21&appId=507756515938786",
                scrolling: "no",
                frameBorder: "0",
                allowTransparency: "true",
                className: "facebook"
              })
            )
          )
        ),
        React__default.createElement(
          "div",
          { className: "column" },
          React__default.createElement(
            "ul",
            { className: "list-inline text-right" },
            React__default.createElement(
              "li",
              null,
              React__default.createElement(
                "a",
                { href: "https://auth0.com/privacy" },
                "Privacy Policy"
              )
            ),
            React__default.createElement(
              "li",
              null,
              React__default.createElement(
                "a",
                { href: "https://auth0.com/terms" },
                "Terms of Service"
              )
            ),
            React__default.createElement(
              "li",
              null,
              React__default.createElement(
                "span",
                null,
                "\xA9 2013-2016 Auth0\xAE Inc. All Rights Reserved."
              )
            )
          )
        )
      )
    )
  );
};

/**
 * Select: Drop-down list.
 */
var Select = function Select(_ref) {
  var options = _ref.options,
      selected = _ref.selected,
      label = _ref.label,
      color = _ref.color,
      handleChange = _ref.handleChange;
  return React__default.createElement(
    "div",
    { className: "select" },
    label && React__default.createElement(
      "span",
      null,
      label
    ),
    React__default.createElement(
      "span",
      { className: "value text-truncate", style: { color: color } },
      options[selected]
    ),
    React__default.createElement("i", { className: "icon-budicon-460" }),
    React__default.createElement(
      "select",
      {
        onChange: handleChange,
        value: options.reduce(function (prev, current, index) {
          if (index === selected) return index;
          return prev;
        })
      },
      options.map(function (name, index) {
        return React__default.createElement(
          "option",
          { key: index, value: index },
          name
        );
      })
    )
  );
};

Select.defaultProps = {
  options: ['Default'],
  selected: 0,
  label: '',
  handleChange: function handleChange() {}
};

Select.propTypes = {
  /**
   * List of options
   */
  options: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  /**
   * Index of default selected value
   */
  selected: React.PropTypes.number.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  label: React.PropTypes.string,
  color: React.PropTypes.string
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};











var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};





var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

/* eslint max-len: ["error", 100, { "ignoreComments": true }] */
/**
 * Try Banner: The main call to action to signup.
 */
function TryBanner(_ref) {
  var title = _ref.title,
      button = _ref.button,
      buttonAction = _ref.buttonAction,
      dark = _ref.dark,
      className = _ref.className,
      rest = objectWithoutProperties(_ref, ['title', 'button', 'buttonAction', 'dark', 'className']);

  return React__default.createElement(
    'div',
    _extends({
      className: 'a0src-try-banner ' + className + ' ' + (dark ? 'a0src-try-banner--dark' : '')
    }, rest),
    React__default.createElement(
      'span',
      { className: 'a0src-try-banner__title' },
      title
    ),
    toString.call(buttonAction) === '[object String]' ? React__default.createElement(
      'a',
      {
        className: 'a0src-try-banner__button btn btn-success btn-lg',
        href: buttonAction
      },
      button
    ) : React__default.createElement(
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
  title: React.PropTypes.string,
  /**
   * Text for the button.
   */
  button: React.PropTypes.string,
  /**
   * Action of the button when pressed, this can be a URL (the button will be an anchor tag) or a function (the button will be a button tag).
   */
  buttonAction: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.string]),
  /**
   * Display in dark mode if true.
   */
  dark: React.PropTypes.bool,
  /**
   * Add CSS class selectors to the root element.
   */
  className: React.PropTypes.string
};

TryBanner.defaultProps = {
  title: 'Don\'t have an account yet?',
  button: 'Try Auth0 for Free',
  buttonAction: '#',
  dark: false,
  className: ''
};

// Convert string to spinal tap case
// http://codereview.stackexchange.com/questions/109899/convert-string-to-spinal-case
var toSpinalTapCase = function toSpinalTapCase(str) {
  return str.replace(/(?!^)([A-Z])/g, ' $1').replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
};

var renderMenu = function renderMenu(items, customLink, linkComponent, linkProps) {
  return React__default.createElement(
    'ul',
    { className: 'menu-list' },
    items.map(function (item) {
      return React__default.createElement(
        'li',
        { className: 'menu-item', key: item.text },
        customLink ? React__default.createElement(linkComponent, linkProps(item.url || toSpinalTapCase(item.text), item.text), React__default.createElement(
          'span',
          { className: 'menu-item-link' },
          item.iconCode && React__default.createElement('span', { className: 'menu-item-icon icon-budicon-' + item.iconCode }),
          React__default.createElement(
            'span',
            { className: 'text' },
            item.text
          )
        )) : React__default.createElement(
          'a',
          { className: 'menu-item-link', href: item.url || toSpinalTapCase(item.text) },
          item.iconCode && React__default.createElement('span', { className: 'menu-item-icon icon-budicon-' + item.iconCode }),
          React__default.createElement(
            'span',
            { className: 'text' },
            item.text
          )
        ),
        React__default.createElement(
          'ul',
          { className: 'menu-sublist' },
          item.children && item.children.map(function (subitem) {
            return React__default.createElement(
              'li',
              { className: 'menu-subitem', key: subitem.text },
              React__default.createElement(
                'a',
                {
                  className: 'menu-subitem-link',
                  href: subitem.url || toSpinalTapCase(subitem.text)
                },
                subitem.text
              )
            );
          })
        )
      );
    })
  );
};

/**
 * Sidebar: Styleguide sidebar with drop drown sections.
 */
var Sidebar = function Sidebar(_ref) {
  var header = _ref.header,
      items = _ref.items,
      customLink = _ref.customLink,
      linkComponent = _ref.linkComponent,
      linkProps = _ref.linkProps;
  return React__default.createElement(
    'div',
    { className: 'a0r-sidebar' },
    React__default.createElement(
      'header',
      { className: 'a0r-sidebar-header' },
      header || React__default.createElement(
        'h1',
        null,
        React__default.createElement(
          'a',
          { href: '/' },
          React__default.createElement('img', { src: 'https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg', alt: 'Auth0 badge', width: '30', height: '' })
        )
      )
    ),
    React__default.createElement(
      'nav',
      { className: 'a0r-sidebar-menu' },
      renderMenu(items, customLink, linkComponent, linkProps)
    ),
    React__default.createElement('footer', { className: 'a0r-sidebar-footer' })
  );
};

Sidebar.defaultProps = {
  customLink: false
};

Sidebar.propTypes = {
  /**
   * Element to replace default header content.
   */
  header: React.PropTypes.element,
  /**
   * List of objects representing the sidebar items
   */
  items: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string.isRequired,
    url: React.PropTypes.string,
    iconCode: React.PropTypes.number,
    open: React.PropTypes.bool,
    children: React.PropTypes.arrayOf(React.PropTypes.shape({
      text: React.PropTypes.string.isRequired,
      url: React.PropTypes.string
    })).isRequired
  })).isRequired,
  /**
   * Replace items anchor for custom React element (useful when using SPA router).
   */
  customLink: React.PropTypes.bool,
  /**
   * React component for the Link (use any router you want).
   */
  linkComponent: React.PropTypes.func,
  /**
   * Function with item text and url as parameters that should return link props object.
   */
  linkProps: React.PropTypes.func
};

// auth0 components

exports.EmptyState = EmptyState;
exports.Footer = Footer;
exports.Select = Select;
exports.TryBanner = TryBanner;
exports.Sidebar = Sidebar;
exports.Accordion = reactBootstrap.Accordion;
exports.Alert = reactBootstrap.Alert;
exports.Badge = reactBootstrap.Badge;
exports.Breadcrumb = reactBootstrap.Breadcrumb;
exports.BreadcrumbItem = reactBootstrap.BreadcrumbItem;
exports.Button = reactBootstrap.Button;
exports.ButtonGroup = reactBootstrap.ButtonGroup;
exports.ButtonToolbar = reactBootstrap.ButtonToolbar;
exports.Carousel = reactBootstrap.Carousel;
exports.CarouselItem = reactBootstrap.CarouselItem;
exports.Checkbox = reactBootstrap.Checkbox;
exports.Clearfix = reactBootstrap.Clearfix;
exports.ControlLabel = reactBootstrap.ControlLabel;
exports.Col = reactBootstrap.Col;
exports.Collapse = reactBootstrap.Collapse;
exports.Dropdown = reactBootstrap.Dropdown;
exports.DropdownButton = reactBootstrap.DropdownButton;
exports.Fade = reactBootstrap.Fade;
exports.Form = reactBootstrap.Form;
exports.FormControl = reactBootstrap.FormControl;
exports.FormGroup = reactBootstrap.FormGroup;
exports.Glyphicon = reactBootstrap.Glyphicon;
exports.Grid = reactBootstrap.Grid;
exports.HelpBlock = reactBootstrap.HelpBlock;
exports.Image = reactBootstrap.Image;
exports.InputGroup = reactBootstrap.InputGroup;
exports.Jumbotron = reactBootstrap.Jumbotron;
exports.Label = reactBootstrap.Label;
exports.ListGroup = reactBootstrap.ListGroup;
exports.ListGroupItem = reactBootstrap.ListGroupItem;
exports.Media = reactBootstrap.Media;
exports.MenuItem = reactBootstrap.MenuItem;
exports.Modal = reactBootstrap.Modal;
exports.ModalBody = reactBootstrap.ModalBody;
exports.ModalFooter = reactBootstrap.ModalFooter;
exports.ModalHeader = reactBootstrap.ModalHeader;
exports.ModalTitle = reactBootstrap.ModalTitle;
exports.Nav = reactBootstrap.Nav;
exports.Navbar = reactBootstrap.Navbar;
exports.NavbarBrand = reactBootstrap.NavbarBrand;
exports.NavDropdown = reactBootstrap.NavDropdown;
exports.NavItem = reactBootstrap.NavItem;
exports.Overlay = reactBootstrap.Overlay;
exports.OverlayTrigger = reactBootstrap.OverlayTrigger;
exports.PageHeader = reactBootstrap.PageHeader;
exports.PageItem = reactBootstrap.PageItem;
exports.Pager = reactBootstrap.Pager;
exports.Pagination = reactBootstrap.Pagination;
exports.Panel = reactBootstrap.Panel;
exports.PanelGroup = reactBootstrap.PanelGroup;
exports.Popover = reactBootstrap.Popover;
exports.ProgressBar = reactBootstrap.ProgressBar;
exports.Radio = reactBootstrap.Radio;
exports.ResponsiveEmbed = reactBootstrap.ResponsiveEmbed;
exports.Row = reactBootstrap.Row;
exports.SafeAnchor = reactBootstrap.SafeAnchor;
exports.SplitButton = reactBootstrap.SplitButton;
exports.Tab = reactBootstrap.Tab;
exports.TabContainer = reactBootstrap.TabContainer;
exports.TabContent = reactBootstrap.TabContent;
exports.Table = reactBootstrap.Table;
exports.TabPane = reactBootstrap.TabPane;
exports.Tabs = reactBootstrap.Tabs;
exports.Thumbnail = reactBootstrap.Thumbnail;
exports.Tooltip = reactBootstrap.Tooltip;
exports.Well = reactBootstrap.Well;
exports.RBUtils = reactBootstrap.utils;

Object.defineProperty(exports, '__esModule', { value: true });

})));
