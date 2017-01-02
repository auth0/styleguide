# Auth0 Styleguide - Core

Includes the common styles for every Auth0 applications like variables, mixins, utility classes and scaffolding styles.

## Install

### CDN

Using our CDN is the prefered solution. Just add the following line in your project's HTML head and you are done.

```html
<link rel="stylesheet" href="https://cdn.auth0.com/styleguide/core/1.0.0/core.min.css" />
```

### NPM

Download the package from NPM if you need to access to the stylus mixins or variables.

```bash
npm install --save auth0/styleguide#core-0.0.3
```

## Development

Run this commands to start developing:

```bash
npm install
npm start
```

## Releasing a new version

Run the command `bin/version <patch|minor|major|version-no>` inside the package directory. This will commit a new version for you.

Example
```
bin/version patch
```
