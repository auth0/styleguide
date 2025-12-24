.PHONY: install lint test build publish

install:
	git config --global --add safe.directory "$$(pwd)" || true
	npm install
	npm run heroku-postbuild

lint:
	npm run lint

test:
	npm test

build:
	npm run build

publish: build
	npm run publish:cdn
