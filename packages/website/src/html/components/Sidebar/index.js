import React, { Component } from 'react';
import {
  Sidebar as SidebarRC,
  SidebarItem,
  SidebarSubitem
} from '@auth0/styleguide-react-components';
import { Link } from 'react-router';
import sidebarConfig from './sidebar-config.json';
import componentsConfig from '../../containers/Components/components-config.json';
import emailsConfig from '../../containers/Email/emails-config.json';

// Add components and email items to Sidebar based on config files of those sections
const completeSidebarConfig = config =>
  config.reduce((acc, item) => {
    const newItem = Object.assign({}, item);

    if (item.text === 'Components') {
      newItem.children = componentsConfig.map(i => ({
        text: i.title,
        url: i.folder
      }));
    }

    if (item.text === 'Email templates') {
      newItem.children = emailsConfig.map(i => ({
        text: i.title,
        url: i.folder
      }));
    }

    return acc.concat(newItem);
  }, []);

const dinamicSidebarConfig = completeSidebarConfig(sidebarConfig);

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileNavOpen: false
    };

    dinamicSidebarConfig.forEach((_, i) => {
      this.state[`item-${i}`] = false;
    });
  }

  toggleState = stateProp => {
    // First close all.
    dinamicSidebarConfig.forEach((_, i) => {
      const nameState = `item-${i}`;
      if (nameState === stateProp) return;
      this.setState({ [nameState]: false });
    });
    // Then toggle the Item.
    this.setState(prevState => ({ [stateProp]: !prevState[stateProp] }));
  };

  render() {
    /* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/no-static-element-interactions */
    const { mobileNavOpen } = this.state;
    return (
      <SidebarRC
        mobileNavOpen={mobileNavOpen}
        toggleNavOnClick={() => this.toggleState('mobileNavOpen')}
        header={
          <h1 className="default-title">
            <Link className="default-link" to="/">
              <img
                src="https://cdn.auth0.com/styleguide/components/1.0.8/media/logos/img/badge.svg"
                alt="Auth0 logo"
                width="30"
              />
            </Link>
          </h1>
        }
      >
        {dinamicSidebarConfig.map((fatherItem, i) => {
          const realWrapper = fatherItem.url
            ? <Link to={fatherItem.url} onClick={() => this.toggleState(`item-${i}`)} />
            : <div onClick={() => this.toggleState(`item-${i}`)} />;

          return (
            <SidebarItem
              text={fatherItem.text}
              icon={fatherItem.icon}
              wrapper={realWrapper}
              open={this.state[`item-${i}`]}
              arrow={fatherItem.arrow}
              key={`father-item-${i}`}
            >
              {fatherItem.children &&
                fatherItem.children.map((childItem, j) => {
                  const subItemURL = `${toURL(fatherItem.text)}/${childItem.url ||
                    toDashCase(childItem.text)}`;

                  return (
                    <SidebarSubitem
                      text={childItem.text}
                      wrapper={<Link to={subItemURL} />}
                      key={`children-item-${j}`}
                    />
                  );
                })}
            </SidebarItem>
          );
        })}
      </SidebarRC>
    );
  }
}

function toURL(text) {
  return `/${toDashCase(text)}`;
}

function toDashCase(text) {
  const phase1 = text.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
  const phase2 = phase1.replace(' ', '-');
  return phase2;
}

export default Sidebar;
