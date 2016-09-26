import React, { Component, PropTypes } from 'react'
import Loader from 'react-loader-advanced';

class LoadingPanel extends Component {
  constructor(props) {
    super(props);

    this.setLoading = this.setLoading.bind(this);
    this.state = {
      show: props.show
    };

    // Default styles.
    this.backgroundStyle = {
      padding: '5px',
      backgroundColor: 'rgba(255,255,255,0.8)',
      minHeight: '50px',
      ...this.props.backgroundStyle
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.show) {
      clearTimeout(this.showTimer);
      return this.setState({
        show: false
      });
    }

    this.showTimer = setTimeout(this.setLoading, this.props.delay || 100);
  }

  componentWillUnmount() {
    if (this.showTimer) {
      clearTimeout(this.showTimer);
    }
  }

  setLoading() {
    this.setState({ show: true });
  }

  render() {
    if (!this.state.show) {
      return <div>{this.props.children}</div>;
    }

    const animation = (
      <div className={`spinner ${this.props.spinnerClasses}`} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="circle" />
      </div>
    );

    return (
      <Loader show={this.state.show} message={animation} backgroundStyle={this.backgroundStyle}>
        {this.props.children}
      </Loader>
    );
  }

}

LoadingPanel.propTypes = {
  backgroundStyle: PropTypes.object,
  show: PropTypes.bool,
  delay: PropTypes.number,
  children: PropTypes.node,
  spinnerClasses: PropTypes.string
};

LoadingPanel.defaultProps = {
  spinnerClasses: 'spinner-md'
};

export default LoadingPanel;
