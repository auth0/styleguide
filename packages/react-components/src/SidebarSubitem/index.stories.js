import React from "react";
import { storiesOf } from "@kadira/storybook";
import SidebarSubitem from "./";

storiesOf("SidebarSubitem", module)
  .add("text prop", () => <SidebarSubitem text="React" />)
  .add("text and url prop", () =>
    <SidebarSubitem text="React" url="https://auth0.com" />
  )
  .add("text, url and wrapper prop", () =>
    <SidebarSubitem text="React" url="https://auth0.com" wrapper={<em />} />
  );
