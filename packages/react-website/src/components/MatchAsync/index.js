// react-router-match-async
// https://github.com/jtmthf/react-router-match-async
// MIT License - Copyright (c) 2016 Jack Moore

import React, { createElement, Component, PropTypes } from 'react';
import { Match } from 'react-router';

export default class MatchAsync extends Component {
  static propTypes = {
    getComponent: PropTypes.func.isRequired,
    onError: PropTypes.func,
    componentProps: PropTypes.any
  }

  getComponent = () => {
    const { getComponent } = this.props;
    const maybePromise = getComponent((err, component) => {
      if (err) {
        this.errorHandler(err);
      } else {
        this.setComponent(component);
      }
    });
    if (maybePromise && typeof maybePromise.then === 'function') {
      maybePromise
        .then(this.setComponent)
        .catch(this.errorHandler);
    }
  }

  setComponent = (component) => {
    this.component = component.default ? component.default : component;
    this.setState({ loaded: true });
  }

  errorHandler = (err) => {
    const { onError } = this.props;
    if (onError) {
      onError(err);
    } else {
      throw err;
    }
  }

  render() {
    const { componentProps } = this.props;
    return (
      <Match
        {...this.props}
        render={(matchProps) => {
          const { component, getComponent } = this;
          if (component === undefined) {
            getComponent();
          }
          return component !== undefined
            ? createElement(component, { ...matchProps, ...componentProps })
            // TODO: place a nice <Spinner /> component here.
            : <span />;
        }}
      />
    );
  }
}
