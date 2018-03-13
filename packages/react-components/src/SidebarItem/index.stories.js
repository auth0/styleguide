import React from 'react';
import { storiesOf } from '@storybook/react';
import SidebarItem from './';
import { SidebarSubitem } from '../';

storiesOf('SidebarItem', module)
  .add('text prop', () => <SidebarItem text="Auth0" />)
  .add('text and icon prop', () => <SidebarItem text="Auth0" icon={12} />)
  .add('text, icon and arrow prop', () => <SidebarItem text="Auth0" icon={12} arrow />)
  .add('text, icon, arrow and wrapper prop', () =>
    <SidebarItem text="Auth0" icon={12} wrapper={<em />} arrow />
  )
  .add("text, icon and arrow prop with SidebarSubitem's as children closed", () =>
    <SidebarItem text="Auth0" icon={12} arrow>
      <SidebarSubitem text="Lock" />
      <SidebarSubitem text="Passwordless" />
      <SidebarSubitem text="Breached Password" />
    </SidebarItem>
  )
  .add("text, icon and arrow prop with SidebarSubitem's as children open", () =>
    <SidebarItem text="Auth0" icon={12} url="https://auth0.com" arrow open>
      <SidebarSubitem text="Lock" />
      <SidebarSubitem text="Passwordless" />
      <SidebarSubitem text="Breached Password" />
    </SidebarItem>
  );
