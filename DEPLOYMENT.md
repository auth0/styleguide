# Releasing Styleguide

This document briefly explains how the release process for Styleguide works.

## Branching

Currently, Styleguide uses `master` as the *production* branch. This means whatever is pushed to master will be considered as stable code and will be released to npm if the version of a `package.json` is higher than the latest avaiable on npm.

## Packages

Currently, Styleguide consists of the following packages:

- `@auth0/styleguide-components`: located in `packages/components`
- `@auth0/styleguide-core`: located in `packages/core`
- `@auth0/styleguide-react-components`: located in `packages/react-components`
- `auth0-styleguide-website`: located in `packages/website`. Not published on npm.

## Development process

A normal development process should consist of PRs targeting `master`. These PRs would add features or fixes to the stable codebase without releasing anything to npm.

### Releasing a new version

Once it's time for a new version's release, a PR bumping the `package.json` of the package to be updated should be opened and merged to `master`. This will trigger a Jenkins task that will build and publish the new version.

> Note: Since December 21st, `master` is a protected branch and code cannot be pushed directly to it. This is in order to prevent accidental releases.

## Questions?

If you have any questions please contact the Design Systems Team at [#design-system](https://auth0.slack.com/messages/C5ZK0DD8X/) in Slack.
