#!/bin/bash

set -e

# Release script

# Export RELEASE env var
export RELEASE=1

# Verifies that is running from the right directory
if ! [ -e tools/scripts/release.sh ]; then
  echo >&2 "Please run tools/scripts/release.sh from the repo root"
  exit 1
fi

# Save last commit name
LAST_COMMIT=$(git log -1 --pretty=%B)
# git origin of destination
ORIGIN_DEST="origin"
# Package name
PACKAGE_NAME="core"
# Get new version
NEXT_VERSION=$(node -p "require('./package').version")
# Get new version major
NEXT_VERSION_MAJOR=$(node -p "require('semver').parse('$NEXT_VERSION').major")
# Get new version minor
NEXT_VERSION_MINOR=$(node -p "require('semver').parse('$NEXT_VERSION').minor")
# Get new version major and minor
NEXT_VERSION_MAJORMINOR="$NEXT_VERSION_MAJOR.$NEXT_VERSION_MINOR"

# Publish to CDN
$(npm bin)/ccu

# Publish git tag
TAG_NAME="$PACKAGE_NAME-$NEXT_VERSION"
TAG_EXISTS=$(git tag -l "$TAG_NAME")

if [ ! -z "$TAG_EXISTS" ]; then
  echo "There is already a tag $TAG_EXISTS in git. Skiping git deploy."
else
  echo "Deploying $NEXT_VERSION to git"

  # Name of the temporary branch for the package build process
  TEMP_TAG_BRANCH="$PACKAGE_NAME-temp"
  # Name of latest, major and major and minor git tags
  TAG_NAME_MAJOR="$PACKAGE_NAME-$NEXT_VERSION_MAJOR"
  TAG_NAME_MAJORMINOR="$PACKAGE_NAME-$NEXT_VERSION_MAJORMINOR"
  TAG_NAME_LATEST="$PACKAGE_NAME-latest"

  ## Change to the temporary branch
  git branch -D "$TEMP_TAG_BRANCH"
  git checkout -b "$TEMP_TAG_BRANCH"

  ## Build module
  NODE_ENV=production npm run build

  ## Remove non related files
  rm -rf ../../bin ../../landing ../../lib ../../vendor
  rm ../../.babelrc ../../.eslintrc ../../.gitignore ../../Gruntfile.js ../../gulpfile.js ../../README.md ../../app.json ../../bower.json ../../component.json ../../index.js ../../index.styl ../../lerna.json ../../package.json ../../webpack.config.js

  ## Add build dir to git (remove build from .gitignore)
  grep -v '^build$' .gitignore > .gitignore2
  mv .gitignore2 .gitignore

  ## Move actual package to root
  mv .gitignore package.json src build ../../

  cd ../../

  echo packages >> .gitignore

  ## Commit changes and update git stage with changes on the .gitignore file
  git rm -r --cached .
  git add .
  git commit -am "$NEXT_VERSION build"

  ## Create git tags
  git tag $TAG_NAME
  git tag $TAG_NAME_MAJORMINOR -f
  git tag $TAG_NAME_MAJOR -f
  git tag $TAG_NAME_LATEST -f

  ## Publish git tags
  git push $ORIGIN_DEST $TAG_NAME
  git push $ORIGIN_DEST $TAG_NAME_MAJORMINOR -f
  git push $ORIGIN_DEST $TAG_NAME_MAJOR -f
  git push $ORIGIN_DEST $TAG_NAME_LATEST -f

  ## Remove temporary branch and switch to previous branch
  git checkout master
  git branch -D $TEMP_TAG_BRANCH
fi
