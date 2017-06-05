import React from "react";
import { Button } from "../";

const codeExample1 = `<div>
  {/* Standard button */}
  <Button>Default</Button>

  {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
  <Button bsStyle="primary">Primary</Button>

  {/* Indicates a successful or positive action */}
  <Button bsStyle="success">Success</Button>

  {/* Contextual button for informational alert messages */}
  <Button bsStyle="info">Info</Button>

  {/* Indicates caution should be taken with this action */}
  <Button bsStyle="warning">Warning</Button>

  {/* Indicates a dangerous or potentially negative action */}
  <Button bsStyle="danger">Danger</Button>

  {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
  <Button bsStyle="link">Link</Button>
</div>`;

const examples = [
  {
    component: (
      <div>
        {/* Standard button */}
        <Button>Default</Button>&nbsp;&nbsp;

        {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
        <Button bsStyle="primary">Primary</Button>&nbsp;&nbsp;

        {/* Indicates a successful or positive action */}
        <Button bsStyle="success">Success</Button>&nbsp;&nbsp;

        {/* Contextual button for informational alert messages */}
        <Button bsStyle="info">Info</Button>&nbsp;&nbsp;

        {/* Indicates caution should be taken with this action */}
        <Button bsStyle="warning">Warning</Button>&nbsp;&nbsp;

        {/* Indicates a dangerous or potentially negative action */}
        <Button bsStyle="danger">Danger</Button>&nbsp;&nbsp;

        {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
        <Button bsStyle="link">Link</Button>&nbsp;&nbsp;
      </div>
    ),
    code: codeExample1,
    center: true,
    title: "Default",
    showTitle: false,
    url: "default"
  }
];

export default examples;
