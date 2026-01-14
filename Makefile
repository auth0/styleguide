.PHONY: install lint test build publish

install:
	npm ci

lint:
	npm run lint

test:
	npm test

build:
	npm run build

publish: build
	npm run publish:cdn
