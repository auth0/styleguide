import React, { Component, PropTypes } from 'react'
import styles from './index.styl';

class ExtensionHeader extends Component {
  render () {
    return (
      <header className={styles.extensionHeader} style={{ position: 'static' }}>
        <nav role="navigation" className={`navbar navbar-default ${styles.navigation}`}>
          <div className="container">
            <div className={styles.logo}>
              <div className={styles.brandLogo}></div>
              <h1 className={styles.extensionTitle}>{this.props.title}</h1>
            </div>
            <div id="navbar-collapse" className="collapse navbar-collapse">
              <ul className={`nav navbar-nav navbar-right ${styles.navbarRight}`}>
                <li>
                  <a href="https://auth0.com/docs/extensions/authorization-extension">Help</a>
                </li>
                <li>
                  <a href="https://manage.auth0.com/">Dashboard</a>
                </li>
                { /* <li className="dropdown">
                  <span role="button" data-toggle="dropdown" data-target="#" className="btn-username">
                    <img src={user.get('picture')} className="avatar" />
                    <span className="username-text">
                      { issuer || user.get('nickname') || user.get('email')}
                    </span>
                    <i className="icon-budicon-460 toggle-icon"></i>
                  </span>
                  <ul role="menu" className="dropdown-menu">
                    <li role="presentation">
                      <a href="#" role="menuitem" tabIndex="-1" onClick={openConfiguration}>
                        Configuration
                      </a>
                    </li>
                    <li role="presentation" className="divider"></li>
                    <li role="presentation">
                      <a href="#" role="menuitem" tabIndex="-1" onClick={onLogout}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </li> */ }
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

ExtensionHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default ExtensionHeader;
