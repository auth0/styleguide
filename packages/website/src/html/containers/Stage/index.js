import React, { Component, PropTypes } from "react";

class Stage extends Component {
  constructor(props) {
    super();

    this.html = props.isEmail
      ? require(`!raw-loader!@auth0/styleguide-components/build/emails/${props
          .params.section}/demo.html`) // eslint-disable-line
      : require(`@auth0/styleguide-components/src/${props.params
          .section}/demo.pug`)(); // eslint-disable-line
  }
  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: this.html }} /> // eslint-disable-line react/no-danger
    );
  }
}

Stage.propTypes = {
  params: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  isEmail: PropTypes.bool
};

export default Stage;
