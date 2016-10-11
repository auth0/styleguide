#!/bin/bash -e

NODE_ENV=production npm run build -- --bail

$(npm bin)/serve --port ${PORT:-3000} ./build
