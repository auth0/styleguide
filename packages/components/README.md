# Auth0 Styleguide - Components

CSS components for Auth0 projects (based on Bootstrap components).

## Installation

### CDN

Using our CDN is the prefered solution. Just add the following line in your project's HTML head and you are done.

```html
<link rel="stylesheet" href="https://cdn.auth0.com/styleguide/components/2.0.0/components.min.css" />
```

### NPM

Download the package from NPM if you want to integrate the components styles to your own build process.

```bash
npm install --save @auth0/styleguide-components
```

## Development

**Node.js v6.9.1 and npm v3.10.8 or newer is required.**

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

## Font licensing update (v3.1.0)

**Email Templates - Avenir Font Removal:** Removed proprietary Avenir font from MJML email templates and replaced with system font stack for maximum compatibility and legal compliance.

Email templates now use:
```
-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
```

This ensures emails render with native fonts on all platforms without licensing issues:
- **macOS/iOS:** San Francisco (Apple's system font)
- **Windows:** Segoe UI
- **Android:** Roboto
- **Others:** Helvetica Neue or Arial

Visual impact is minimal as system fonts provide professional typography. This change resolves licensing liability for Avenir font distribution.

## License

All the logos and branding are copyright Auth0 and may not be used or reproduced without explicit permission from Auth0 Inc.

The icons are licensed from [Budi Harto Tanrim](http://budicon.buditanrim.co/). All other third-party components are subject to their own licenses.
