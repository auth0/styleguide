# Auth0 Styleguide - React Components

Library of Auth0 React components. All the [react-bootstrap](http://react-bootstrap.github.io/components.html) components are re-exported inside this lib.

You can find the API, see examples, and play with live editing of every component on the [React Components section of our styleguide](https://styleguide.auth0.com/#/react).

## Installation 📦

If you are using npm you can do (react and react-bootstrap are peer dependencies):
```
npm i --save react@15 react-bootstrap@0.30 @auth0/styleguide-react-components
```

And load the CSS from our CDN:

```html
<!-- Core and Components CSS bundles are peer dependencies of react-components -->
<link rel="stylesheet" href="https://cdn.auth0.com/styleguide/core/2.0.5/core.min.css" />
<link rel="stylesheet" href="https://cdn.auth0.com/styleguide/components/2.0.0/components.min.css" />

<link rel="stylesheet" href="https://cdn.auth0.com/styleguide/react-components/1.0.2/react-components.css" />
```

The CSS bundles are also included on the packages installed via npm, but we encourage you to use it via our CDN so we all benefit from sharing the same url of the package to improve load time.

## Usage

Here is a quick example to get you started:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@auth0/styleguide-react-components';

const App = () => (
  <div>
    <Button>+1</Button>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

## Development 🛠

### Add a new component

**Node.js v6.9.1 and npm v3.10.8 or newer is required.**

You can develop new components using [React StoryBook](https://github.com/kadirahq/react-storybook).

The `index.js` and `examples.js` files will be used to generate the React Styleguide page of the component, which will contain all the documentation for it (title, description, examples and table with properties information).

To create a new component run `npm start` and add your component inside the `/src` folder with the following files:

#### **index.js**
Main component file, it should export the component.

We use [react-docgen](https://github.com/reactjs/react-docgen) to extract information from this file to generate the documentation of our components. You should use the following structure:

```javascript
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Example component title: Example component description.
 */
const ExampleComponent = ({ prop1, prop2 }) => (
	<div>Example component</div>
);

ExampleComponent.propTypes = {
  /**
   * prop1 description
   */
  prop1: PropTypes.array.isRequired,
  /**
   * prop2 description
   */
  prop2: PropTypes.number.isRequired
};

export default ExampleComponent;
```

This file will generate the following page in the React Styleguide website:

<img src="https://cloud.githubusercontent.com/assets/6318057/19816973/efb35be8-9d1f-11e6-9aea-ba589a2ec111.png" alt="Example component page"/>

The comment on top of the component definition will match with the page title and description, while the comments on top of the propTypes definitions will match with the definitions of the properties table.


#### **examples.js**

Export an array of objects representing the different examples of the component to showcase them in the [Auth0 React Styleguide](https://styleguide.auth0.com/react).

Each object of the array can have the following properties:

| Property | Type | Description |
|:---|:---|:---|
|component|React element|React element|
|code|string|Code of the component (should match the code of the component property)
|center|boolean|Center the component in the middle of the playground
|title|string|Example title
|showTitle|boolean|Show the example title
|url|string| Url for the component page

Example file:

```javascript
import React from 'react';
import ExampleComponent from './';

const examples = [
  {
    component: (
      <ExampleComponent />
    ),
    code: `<ExampleComponent />`,
    title: 'Example title',
    center: true,
    showTitle: true,
    url: 'default'
  }
];

export default examples;
```

#### **index.test.js**

Test your component using [mocha](https://github.com/mochajs/mocha), [chai](https://github.com/chaijs/chai) and [enzyme](https://github.com/airbnb/enzyme).

#### **index.stories.js**

Add stories for your React component. You can check [React StoryBook - Writing Stories](https://getstorybook.io/docs/react-storybook/basics/writing-stories) for more information.

### Components style

Follow this conventions when you are developing components:

- Your components should be [stateless functional components](https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d#.3bqak5qjt) (they shouldn't contain state or lifecycle methods so we can use them with state management libraries like Redux).
- Add propTypes for all properties and add the proper comments so that information is shown in the Auth0 React Styleguide.
- Prefix your component css classes with its name so it doesn't conflict with others existing classes.


### Releasing a new version

Run the command `bin/version <patch|minor|major|version-no>` inside the root of this package. This will commit a new version for you.

Example
```
bin/version patch
```

## License

All the logos and branding are copyright Auth0 and may not be used or reproduced without explicit permission from Auth0 Inc.

The icons are licensed from [Budi Harto Tanrim](https://budicon.co/). All other third-party components are subject to their own licenses.
