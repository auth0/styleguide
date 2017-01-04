#!/bin/bash -e
#
# Release script

# Export RELEASE env var
export RELEASE=1

# Verifies that is running from the right directory
if ! [ -e tools/scripts/release.sh ]; then
  echo >&2 "Please run tools/scripts/release.sh from the repo root"
  exit 1
fi

# git origin of destination
GIT_ORIGIN_DEST="origin"
# git branch of destination
GIT_BRANCH_DEST="master"
# Package name
PACKAGE_NAME=$(node -p "require('./package').name")
# Package version
PACKAGE_VERSION=$(node -p "require('./package').version")

# Test before start the release process

echo "Testing $PACKAGE_VERSION"

npm test

# Publish to our CDN

echo "Deploying $PACKAGE_VERSION to our CDN"

$(npm bin)/ccu

# Publish to npm

echo "Deploying $PACKAGE_VERSION to npm"

NPM_EXISTS=$(npm info $PACKAGE_NAME@$PACKAGE_VERSION)

if [ "$NPM_EXISTS" == "undefined" ]; then
  npm publish
else
  echo "There is already a version $PACKAGE_VERSION in npm. Skiping npm publish."
fi

# Publish git tag

echo "Deploying $PACKAGE_VERSION git tag"

TAG_NAME="$PACKAGE_NAME-v$PACKAGE_VERSION"
TAG_EXISTS=$(git tag -l "$TAG_NAME")

if [ ! -z "$TAG_EXISTS" ]; then
  echo "There is already a tag $TAG_EXISTS in git. Skiping git tag deploy."
else
  git tag $TAG_NAME
  git push $GIT_ORIGIN_DEST $TAG_NAME
fi
