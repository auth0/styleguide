import React, { Component, PropTypes } from 'react';
import { storiesOf } from '@kadira/storybook';
import Sidebar from './';
import { SidebarItem, SidebarSubitem } from '../';

class SidebarState extends Component {
  static propTypes = {
    webtaskHeader: PropTypes.bool
  };

  static defaultProps = {
    webtaskHeader: false
  };

  state = {
    isOpen: false
  };

  toggleSidebarNav = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const WebtaskHeader = () =>
      <img
        src="https://webtask.io/images/symbol.svg"
        height="40"
        alt="Webtask logo"
        style={{ marginTop: '15px' }}
      />;
    return (
      <Sidebar
        isOpen={this.state.isOpen}
        toggleNavOnClick={() => this.toggleSidebarNav()}
        header={this.props.webtaskHeader ? <WebtaskHeader /> : null}
      >
        <SidebarItem text="Products" icon={12}>
          <SidebarSubitem
            text="Lock"
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            wrapper={<a href="https://auth0.com/lock" />}
          />
          <SidebarSubitem
            text="Passwordless"
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            wrapper={<a href="https://auth0.com/passwordless" />}
          />
          <SidebarSubitem
            text="Breached Password"
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            wrapper={<a href="https://auth0.com/breached-passwords" />}
          />
        </SidebarItem>
        <SidebarItem
          text="Pricing"
          icon={1}
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          wrapper={<a href="https://auth0.com/pricing" />}
        />
      </Sidebar>
    );
  }
}

storiesOf('Sidebar', module)
  .add('Sidebar with SidebarItem and SidebarSubitem childrens', () => <SidebarState />)
  .add('Sidebar with SidebarItem and SidebarSubitem childrens and header prop', () =>
    <SidebarState webtaskHeader />
  );
