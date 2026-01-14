.PHONY: install lint test build publish

install:
	git config --global --add safe.directory "$$(pwd)" || true
	npm ci

lint:
	npm run lint

test:
	npm test

build:
	npm run build

publish: build
	npm run publish:cdn
