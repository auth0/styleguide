import React, { Children, PropTypes, cloneElement } from 'react';
import { Accordion, Alert, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Carousel, CarouselItem, Checkbox, Clearfix, Col, Collapse, ControlLabel, Dropdown, DropdownButton, Fade, Form, FormControl, FormGroup, Glyphicon, Grid, HelpBlock, Image, InputGroup, Jumbotron, Label, ListGroup, ListGroupItem, Media, MenuItem, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, Navbar, NavbarBrand, Overlay, OverlayTrigger, PageHeader, PageItem, Pager, Pagination, Panel, PanelGroup, Popover, ProgressBar, Radio, ResponsiveEmbed, Row, SafeAnchor, SplitButton, Tab, TabContainer, TabContent, TabPane, Table, Tabs, Thumbnail, Tooltip, Well, utils } from 'react-bootstrap';

/**
 * Empty state: Simple component for onboarding users to sections with no data.
 */
var EmptyState = function EmptyState(_ref) {
  var title = _ref.title,
      description = _ref.description,
      iconCode = _ref.iconCode,
      image = _ref.image,
      children = _ref.children;
  return React.createElement(
    "div",
    { className: "a0r-empty-state" },
    React.createElement(
      "h2",
      { className: "a0r-empty-state-title" },
      title
    ),
    image || React.createElement(
      "div",
      { className: "a0r-empty-state-icon" },
      React.createElement("i", { className: "icon-budicon-" + iconCode })
    ),
    description && React.createElement(
      "p",
      { className: "a0r-empty-state-description" },
      description
    ),
    React.createElement(
      "div",
      { className: "a0r-empty-state-children" },
      " ",
      children,
      " "
    )
  );
};

EmptyState.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconCode: PropTypes.string,
  image: PropTypes.node,
  children: PropTypes.node
};

/**
 * Footer: Auth0's footer component. Styles are inherited from components CSS bundle.
 */
var Footer = function Footer() {
  return React.createElement(
    "footer",
    { className: "site-footer" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "logo" },
        React.createElement("img", {
          src: "https://cdn.auth0.com/styleguide/latest/lib/logos/img/badge.png",
          width: "30",
          role: "presentation"
        })
      ),
      React.createElement(
        "div",
        { className: "footer-grid" },
        React.createElement(
          "div",
          { className: "column" },
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "h6",
              null,
              "Product"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/pricing" },
              "Pricing"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/why-auth0" },
              "Why Auth0"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/how-it-works" },
              "How It Works"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "column" },
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "h6",
              null,
              "Company"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/about" },
              "About Us"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/blog" },
              "Blog"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/jobs" },
              "Jobs"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/press" },
              "Press"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "column" },
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "h6",
              null,
              "Security"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/availability-trust" },
              "Availability & Trust"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/security" },
              "Security"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/whitehat" },
              "White Hat"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "column" },
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "h6",
              null,
              "Learn"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://support.auth0.com" },
              "Help & Support"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/docs" },
              "Documentation"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/opensource" },
              "Open Source"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "column" },
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "h6",
              null,
              "Extend"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/lock" },
              "Lock"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/wordpress" },
              "WordPress"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/docs/apiv2" },
              "API Explorer"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "contact" },
          React.createElement(
            "div",
            { className: "column" },
            React.createElement(
              "div",
              { className: "item" },
              React.createElement(
                "h6",
                null,
                "Contact"
              )
            ),
            React.createElement(
              "div",
              { className: "item item-text" },
              "10900 NE 8th Street",
              React.createElement("br", null),
              "Suite 700",
              React.createElement("br", null),
              "Bellevue, WA   98004"
            )
          ),
          React.createElement(
            "div",
            { className: "column no-heading" },
            React.createElement(
              "div",
              { className: "item" },
              React.createElement(
                "a",
                { href: "tel:+18882352699" },
                "+1 (888) 235-2699"
              )
            ),
            React.createElement(
              "div",
              { className: "item" },
              React.createElement(
                "a",
                { href: "tel:+14253126521" },
                "+1 (425) 312-6521"
              )
            ),
            React.createElement(
              "div",
              { className: "item" },
              React.createElement(
                "a",
                { href: "https://support.auth0.com" },
                "Support Center"
              )
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "colophon" },
        React.createElement(
          "div",
          { className: "column" },
          React.createElement(
            "div",
            { className: "social" },
            React.createElement(
              "div",
              { className: "twitter" },
              React.createElement("iframe", {
                allowTransparency: "true",
                frameBorder: "0",
                scrolling: "no",
                src: "//platform.twitter.com/widgets/follow_button.html?screen_name=auth0",
                className: "twitter"
              })
            ),
            React.createElement(
              "div",
              { className: "facebook" },
              React.createElement("iframe", {
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
        React.createElement(
          "div",
          { className: "column" },
          React.createElement(
            "ul",
            { className: "list-inline text-right" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "https://auth0.com/privacy" },
                "Privacy Policy"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "https://auth0.com/terms" },
                "Terms of Service"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
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
  return React.createElement(
    "div",
    { className: "a0r-select" },
    label && React.createElement(
      "span",
      null,
      label
    ),
    React.createElement(
      "span",
      { className: "a0r-value text-truncate", style: { color: color } },
      options[selected].label
    ),
    React.createElement("i", { className: "icon-budicon-460" }),
    React.createElement(
      "select",
      {
        // Pass event and selected option object to onChange handler
        onChange: function onChange(e) {
          return handleChange(e, options.filter(function (opt) {
            return opt.value === e.target.value;
          })[0]);
        },
        value: options[selected].value
      },
      options.map(function (opt, index) {
        return React.createElement(
          "option",
          { key: index, value: opt.value },
          opt.label
        );
      })
    )
  );
};

Select.defaultProps = {
  selected: 0,
  label: '',
  handleChange: function handleChange() {}
};

Select.propTypes = {
  /**
   * List of options
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  /**
   * Index of default selected value
   */
  selected: PropTypes.number,
  /**
   * Handler for option change, it receives two parameters:
   * the event and the selected option object.
   */
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  color: PropTypes.string
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
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

  return React.createElement(
    'div',
    _extends({
      className: 'a0r-try-banner ' + className + ' ' + (dark ? 'a0r-try-banner--dark' : '')
    }, rest),
    React.createElement(
      'span',
      { className: 'a0r-try-banner__title' },
      title
    ),
    toString.call(buttonAction) === '[object String]' ? React.createElement(
      'a',
      {
        className: 'a0r-try-banner__button btn btn-success btn-lg',
        href: buttonAction
      },
      button
    ) : React.createElement(
      'button',
      {
        className: 'a0r-try-banner__button btn btn-success btn-lg',
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
  title: PropTypes.string,
  /**
   * Text for the button.
   */
  button: PropTypes.string,
  /**
   * Action of the button when pressed, this can be a URL (the button will be an anchor tag) or a function (the button will be a button tag).
   */
  buttonAction: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * Display in dark mode if true.
   */
  dark: PropTypes.bool,
  /**
   * Add CSS class selectors to the root element.
   */
  className: PropTypes.string
};

TryBanner.defaultProps = {
  title: 'Don\'t have an account yet?',
  button: 'Try Auth0 for Free',
  buttonAction: '#',
  dark: false,
  className: ''
};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index = createCommonjsModule(function (module) {
	/*!
   Copyright (c) 2016 Jed Watson.
   Licensed under the MIT License (MIT), see
   http://jedwatson.github.io/classnames
 */
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (typeof define === 'function' && _typeof(define.amd) === 'object' && define.amd) {
			// register as 'classnames', consistent with npm package name
			define('classnames', [], function () {
				return classNames;
			});
		} else {
			window.classNames = classNames;
		}
	})();
});

/**
 * Sidebar: Styleguide sidebar with drop drown sections.
 */
var Sidebar = function Sidebar(_ref) {
  var children = _ref.children,
      header = _ref.header,
      mobileNavOpen = _ref.mobileNavOpen,
      toggleNavOnClick = _ref.toggleNavOnClick;

  // TODO: 57px is the height of SidebarItem.
  // Get the height from a json file generated with:
  // https://github.com/nahody/postcss-export-vars
  var heightMenu = Children.count(children) * 57;

  return React.createElement(
    'div',
    { className: 'a0r-sidebar' },
    React.createElement(
      'header',
      { className: 'a0r-sidebar-header' },
      header || React.createElement(
        'h1',
        { className: 'default-title' },
        React.createElement(
          'a',
          { className: 'default-link', href: '/' },
          React.createElement('img', {
            src: 'https://cdn.auth0.com/styleguide/latest/img/badge.svg',
            alt: 'Auth0 logo',
            width: '30'
          })
        )
      ),
      React.createElement(
        'button',
        {
          type: 'button',
          className: index('menu-toggle', { 'is-close': mobileNavOpen }),
          onClick: toggleNavOnClick
        },
        React.createElement(
          'span',
          { className: 'sr-only' },
          'Toggle navigation'
        ),
        React.createElement('span', { className: 'icon-bar' }),
        React.createElement('span', { className: 'icon-bar' }),
        React.createElement('span', { className: 'icon-bar' }),
        React.createElement('span', { className: 'icon-bar' })
      )
    ),
    React.createElement(
      'nav',
      { className: 'a0r-sidebar-menu' },
      React.createElement(
        'ul',
        {
          className: index('menu-list', { 'is-opened': mobileNavOpen }),
          style: { height: heightMenu + 'px' }
        },
        children
      )
    )
  );
};

Sidebar.propTypes = {
  /**
   * Element to replace the default header content.
   */
  header: PropTypes.node,
  /**
   * The content of the menu. This is usually used to pass SidebarItem and SidebarSubitem elements.
   */
  children: PropTypes.node.isRequired,
  /**
   * Controls whether the navigation is opened or not, only used for mobile.
   */
  mobileNavOpen: PropTypes.bool,
  /**
   * Callback fired when on mobile the Toggle Navigation button is pressed.
   */
  toggleNavOnClick: PropTypes.func
};

Sidebar.defaultProps = {
  open: false,
  toggleNavOnClick: function toggleNavOnClick() {}
};

var SidebarItem = function SidebarItem(_ref) {
  var text = _ref.text,
      wrapper = _ref.wrapper,
      arrow = _ref.arrow,
      icon = _ref.icon,
      children = _ref.children,
      open = _ref.open;

  var heightMenu = Children.count(children) * 45 - 1;
  var WrapperItemChildren = function WrapperItemChildren() {
    return React.createElement(
      'span',
      { className: 'menu-item-link' },
      icon && React.createElement('span', { className: 'menu-item-icon icon-budicon-' + icon }),
      React.createElement(
        'span',
        { className: 'text' },
        text
      ),
      arrow && React.createElement('i', { className: 'icon-budicon-519 pull-right' })
    );
  };

  return React.createElement(
    'li',
    { className: 'a0r-sidebar-menu-item ' + (open ? 'active' : '') },
    cloneElement(wrapper, { children: React.createElement(WrapperItemChildren, null) }),
    children ? React.createElement(
      'ul',
      {
        className: index('menu-sublist', { 'is-opened': open }),
        style: { height: heightMenu + 'px' }
      },
      children
    ) : null
  );
};

SidebarItem.propTypes = {
  /**
   * Text of the item.
   */
  text: PropTypes.string.isRequired,
  /**
   * Wrapper element around the inner content of the item.
   */
  wrapper: PropTypes.node,
  /**
   * Enable arrow icon.
   */
  arrow: PropTypes.bool,
  /**
   * Show Item with an icon from Budicon.
   */
  icon: PropTypes.number,
  /**
   * The content of the menu. This is usually used to pass SidebarSubitem elements.
   */
  children: PropTypes.node,
  /**
   * Controls whether the subitems are showed or not.
   */
  open: PropTypes.bool
};

SidebarItem.defaultProps = {
  wrapper: React.createElement('span', null)
};

var SidebarSubitem = function SidebarSubitem(_ref) {
  var text = _ref.text,
      wrapper = _ref.wrapper;

  var WrapperSubitemChildren = function WrapperSubitemChildren() {
    return React.createElement(
      "span",
      { className: "menu-subitem-link" },
      React.createElement(
        "span",
        { className: "text" },
        text
      )
    );
  };

  return React.createElement(
    "li",
    { className: "a0r-sidebar-menu-subitem" },
    cloneElement(wrapper, { children: React.createElement(WrapperSubitemChildren, null) })
  );
};

SidebarSubitem.propTypes = {
  /**
   * Text of the item.
   */
  text: PropTypes.string.isRequired,
  /**
   * Wrapper element around the inner content of the item.
   */
  wrapper: PropTypes.node
};

SidebarSubitem.defaultProps = {
  wrapper: React.createElement("span", null)
};

// auth0 components

export { EmptyState, Footer, Select, TryBanner, Sidebar, SidebarItem, SidebarSubitem, Accordion, Alert, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Carousel, CarouselItem, Checkbox, Clearfix, ControlLabel, Col, Collapse, Dropdown, DropdownButton, Fade, Form, FormControl, FormGroup, Glyphicon, Grid, HelpBlock, Image, InputGroup, Jumbotron, Label, ListGroup, ListGroupItem, Media, MenuItem, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Nav, Navbar, NavbarBrand, NavDropdown, NavItem, Overlay, OverlayTrigger, PageHeader, PageItem, Pager, Pagination, Panel, PanelGroup, Popover, ProgressBar, Radio, ResponsiveEmbed, Row, SafeAnchor, SplitButton, Tab, TabContainer, TabContent, Table, TabPane, Tabs, Thumbnail, Tooltip, Well, utils as RBUtils };
