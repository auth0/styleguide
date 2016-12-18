import React, { Component, PropTypes } from 'react';
import { Sidebar as SidebarRC, SidebarItem, SidebarSubitem } from 'auth0-styleguide-react-components';
import { Link } from 'react-router';

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
      >
        <SidebarItem
          text="Getting started"
          icon={464}
          wrapper={<Link to="/react" />}
        />
        <SidebarItem
          text="React components"
          icon={464}
          open={rCItemOpen}
          wrapper={<div onClick={() => this.toggleState('rCItemOpen')} />}
        >
          {components.map(({ title, url }) => (
            <SidebarSubitem text={title} wrapper={<Link to={url} />} />
          ))}
        </SidebarItem>
      </SidebarRC>
    );
  }
}

export default Sidebar;
