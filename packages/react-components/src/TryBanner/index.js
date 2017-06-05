/* eslint max-len: ["error", 100, { "ignoreComments": true }] */
import React, { PropTypes } from 'react';

/**
 * Try Banner: The main call to action to signup.
 */
function TryBanner({ title, button, buttonAction, dark, className, ...rest }) {
  return (
    <div className={`a0r-try-banner ${className} ${dark ? 'a0r-try-banner--dark' : ''}`} {...rest}>
      <span className="a0r-try-banner__title">{title}</span>
      {toString.call(buttonAction) === '[object String]'
        ? <a className="a0r-try-banner__button btn btn-success btn-lg" href={buttonAction}>
            {button}
          </a>
        : <button className="a0r-try-banner__button btn btn-success btn-lg" onClick={buttonAction}>
            {button}
          </button>}
    </div>
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
  title: "Don't have an account yet?",
  button: 'Try Auth0 for Free',
  buttonAction: '#',
  dark: false,
  className: ''
};

export default TryBanner;
