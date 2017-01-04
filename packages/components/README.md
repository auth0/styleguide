# Auth0 Styleguide - Components

CSS components for Auth0 projects (based on Bootstrap components).

## Installation

### CDN

Using our CDN is the prefered solution. Just add the following line in your project's HTML head and you are done.

```html
<link rel="stylesheet" href="https://cdn.auth0.com/styleguide/components/1.0.0/components.min.css" />
```

### NPM

Download the package from NPM if you want to integrate the components styles to your own build process.

```bash
npm install --save auth0-styleguide-components
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
