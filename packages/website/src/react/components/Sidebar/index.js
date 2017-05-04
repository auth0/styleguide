import React, { Component, PropTypes } from 'react';
import { Sidebar as SidebarRC, SidebarItem, SidebarSubitem } from '@auth0/styleguide-react-components';
import { Link } from 'react-router';
import './index.styl';

class Sidebar extends Component {
  static propTypes = {
    components: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired).isRequired
  }

  state = {
    mobileNavOpen: false,
    rCItemOpen: false
  }

  toggleState = (stateProp) => {
    this.setState(prevState => ({ [stateProp]: !prevState[stateProp] }));
  }

  render() {
    /* eslint-disable jsx-a11y/anchor-has-content */
    const { components } = this.props;
    const { mobileNavOpen, rCItemOpen } = this.state;
    return (
      <SidebarRC
        mobileNavOpen={mobileNavOpen}
        toggleNavOnClick={() => this.toggleState('mobileNavOpen')}
        header={
          <h1 className="default-title">
            <Link className="default-link" to="/react">
              <img
                src="https://cdn.auth0.com/styleguide/components/1.0.7/media/logos/img/badge.svg"
                alt="Auth0 logo"
                width="30"
              />
              <img
                src="https://cdn.auth0.com/styleguide/components/1.0.7/media/circle-logo/img/react.svg"
                alt="React logo"
                width="36"
              />
            </Link>
          </h1>
        }
      >
        <SidebarItem
          text="Getting started"
          icon={464}
          wrapper={<Link to="/react" />}
        />
        <SidebarItem
          text="React components"
          icon={450}
          open={rCItemOpen}
          wrapper={<div onClick={() => this.toggleState('rCItemOpen')} />}
        >
          {components.map(({ title, url }) => (
            <SidebarSubitem
              text={title}
              wrapper={<Link to={url} />}
              key={title}
            />
          ))}
        </SidebarItem>
        <SidebarItem
          text="CSS components"
          icon={258}
          wrapper={<Link to="/" />}
          arrow
        />
      </SidebarRC>
    );
  }
}

export default Sidebar;
