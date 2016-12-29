import React, { Component, PropTypes } from 'react';

class Stage extends Component {
  constructor(props) {
    super();

    if (props.isEmail) {
      this.html = require(`!raw-loader!auth0-styleguide-components/build/emails/${props.params.section}/demo.html`);
    } else {
      this.html = require(`auth0-styleguide-components/src/${props.params.section}/demo.pug`)();
    }
  }
  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: this.html }} />
    );
  }
}

Stage.propTypes = {
  params: PropTypes.object.isRequired,
  isEmail: PropTypes.bool
};

export default Stage;
