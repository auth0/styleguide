import React, { Component, PropTypes } from 'react';

class Stage extends Component {
  constructor(props) {
    super();

    this.html = require(`auth0-styleguide-components/src/${props.params.section}/demo.pug`)();
  }
  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: this.html }} />
    );
  }
}

Stage.propTypes = {
  params: PropTypes.object.isRequired
};

export default Stage;
