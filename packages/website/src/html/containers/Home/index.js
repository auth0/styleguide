import React, { Component } from 'react';
import charming from 'charming';
import './index.styl';

class Home extends Component {
  componentDidMount() {
    document.querySelectorAll('.lettering-js').forEach(e => charming(e));
  }
  render() {
    return (
      <div className="styleguide-section home-section theme-dark">
        <div className="splash-intro">
          <div className="lines">
            <span className="red" />
            <span className="blue" />
            <span className="blue-light" />
            <span className="gray" />
          </div>
          <h1 className="section-title lettering-js">Styleguide</h1>
          <p className="section-description lettering-js">
            Conjunction of design patterns, components and resources used across
            our products.
          </p>
          <a
            href="http://github.com/auth0/styleguide"
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-success btn-lg"
          >
            <span className="btn-icon btn-icon-custom">
              <svg
                viewBox="0 0 121 119"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g
                    id="GitHub-Mark"
                    transform="translate(-290.000000, -282.000000)"
                    fill="#FFFFFF"
                  >
                    <path
                      id="Fill-51"
                      d="M350.609,282.446 C317.262,282.446 290.221,309.481 290.221,342.833 C290.221,369.514 307.524,392.15 331.518,400.135 C334.536,400.694 335.644,398.825 335.644,397.23 C335.644,395.79 335.588,391.033 335.562,385.987 C318.762,389.64 315.217,378.862 315.217,378.862 C312.47,371.882 308.512,370.026 308.512,370.026 C303.033,366.278 308.925,366.355 308.925,366.355 C314.989,366.78 318.182,372.578 318.182,372.578 C323.568,381.81 332.309,379.141 335.755,377.598 C336.297,373.696 337.862,371.03 339.589,369.523 C326.176,367.996 312.076,362.818 312.076,339.679 C312.076,333.086 314.435,327.699 318.298,323.47 C317.671,321.948 315.604,315.807 318.883,307.489 C318.883,307.489 323.954,305.866 335.494,313.679 C340.311,312.341 345.477,311.67 350.609,311.647 C355.741,311.67 360.911,312.341 365.737,313.679 C377.263,305.866 382.327,307.489 382.327,307.489 C385.614,315.807 383.546,321.948 382.919,323.47 C386.791,327.699 389.134,333.086 389.134,339.679 C389.134,362.873 375.007,367.98 361.56,369.475 C363.726,371.349 365.656,375.024 365.656,380.658 C365.656,388.737 365.586,395.24 365.586,397.23 C365.586,398.837 366.673,400.72 369.734,400.127 C393.715,392.133 410.996,369.505 410.996,342.833 C410.996,309.481 383.959,282.446 350.609,282.446"
                    />
                  </g>
                </g>
              </svg>
            </span>
            Fork from github
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
