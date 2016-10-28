# Auth0 React Components

Library of Auth0 React components. This is for internal use by Auth0 only.

## Installation 📦

If you are using npm you can do:
```
npm i --save auth0/styleguide#react-components-1.0.0
```
This will let you consume the components as a collection of ES modules using a module bundler like Webpack or Browserify.

You can import the components doing:

```javascript
import { Select, TryBanner, EmptyState } from 'auth0-styleguide-react-components';
```

Also you can download the files from our CDN:

```html
<link rel="stylesheet" href="https://cdn.auth0.com/styleguide-react-components/0.0.0/react-components.css" />
<script src="https://cdn.auth0.com/styleguide-react-components/0.0.0/react-components.js"></script>
```

This will include an UMD version that make the components available as a `window.Auth0ReactComponents` global variable.

## Development 🛠

**Node version: 6.9.x NPM version: 3.10.x**

### Add a new component

You can develop new components using [React StoryBook](https://github.com/kadirahq/react-storybook).

The `index.js` and `examples.js` files will be used to generate the React Styleguide page of the component, which will contain all the documentation for it (title, description, examples and table with properties information).

To create a new component run `npm start` and add your component inside the `/src` folder with the following files:

#### **index.js**
Main component file, it should export the component.

We use [react-docgen](https://github.com/reactjs/react-docgen) to extract information from this file to generate the documentation of our components. You should use the following structure:

```javascript
import React, { PropTypes } from 'react';

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

<img src="https://raw.githubusercontent.com/auth0/styleguide/master/packages/react-components/src/images/example-component-page.png" alt="Example component page"/>

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
