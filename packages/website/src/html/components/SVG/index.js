import React, { PropTypes } from 'react';

const SVG = ({ content }) => <div dangerouslySetInnerHTML={{ __html: content }} />;

SVG.propTypes = {
  content: PropTypes.node.isRequired
};

export default SVG;
