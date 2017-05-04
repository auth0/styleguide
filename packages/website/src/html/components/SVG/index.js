import React, { PropTypes } from 'react';

/* eslint-disable react/no-danger */
const SVG = ({ content }) => <div dangerouslySetInnerHTML={{ __html: content }} />;

SVG.propTypes = {
  content: PropTypes.node.isRequired
};

export default SVG;
