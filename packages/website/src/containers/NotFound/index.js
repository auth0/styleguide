import React from 'react';
import error404 from 'website-404-error-page/build/website-404-error-page.pug';
import 'website-404-error-page/build/website-404-error-page.css';

const NotFound = () => (
  <section className="notfound-page" dangerouslySetInnerHTML={{ __html: error404() }} />
);

export default NotFound;
