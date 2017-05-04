Auth0 Styleguide
================

This repository contains a collection of the most common elements in the Auth0's products UI.

**This is for internal use by Auth0 only.**

<img src="https://cloud.githubusercontent.com/assets/6318057/21591144/2a1ca1a6-d0e0-11e6-9431-16c56b859b56.png" />


## Packages

The Auth0 Styleguide is managed as a [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) and it's composed of different packages:

| Package | Version | Description | Dependencies |
|---------|---------|-------------|--------------|
| [`core`](https://github.com/auth0/styleguide/tree/master/packages/core)    | [![npm](https://img.shields.io/npm/v/@auth0/styleguide-core.svg?maxAge=86400)](https://www.npmjs.com/package/@auth0/styleguide-core)   | Global styles (variables, mixins, colors, css reset, typography) | |
| [`components`](https://github.com/auth0/styleguide/tree/master/packages/components) | [![npm](https://img.shields.io/npm/v/@auth0/styleguide-components.svg?maxAge=86400)](https://www.npmjs.com/package/@auth0/styleguide-components) | CSS components like buttons, tables (based on Bootstrap) | [`core`](https://github.com/auth0/styleguide/tree/master/packages/core) |
| [`react-components`](https://github.com/auth0/styleguide/tree/master/packages/react-components) | [![npm](https://img.shields.io/npm/v/@auth0/styleguide-react-components.svg?maxAge=86400)](https://www.npmjs.com/package/@auth0/styleguide-react-components)| React components library |  [`core`](https://github.com/auth0/styleguide/tree/master/packages/core) [`components`](https://github.com/auth0/styleguide/tree/master/packages/components) |
| [`website`](https://github.com/auth0/styleguide/tree/master/packages/website) | - | Styleguide website



## Development

**Node version: 6.9.x NPM version: 3.10.x**

We use [Lerna](https://lernajs.io/) to manage the different packages. You will need to [install it](https://lernajs.io/#getting-started) to run the following commands.

Before start working on any packages run:

```
npm install
lerna bootstrap
```

This command will install all the dependencies of each package, symlink the packages that are dependencies of each other and `npm prepublish` all the bootstrapped packages. For more information check the [Lerna repo](https://github.com/lerna/lerna#bootstrap).

For more information on how to run each package check the specific README.

## License

All the logos and branding are copyright Auth0 and may not be used or reproduced without explicit permission from Auth0 Inc.

The icons are licensed from [Budi Harto Tanrim](http://budicon.buditanrim.co/). All other third-party components are subject to their own licenses.
