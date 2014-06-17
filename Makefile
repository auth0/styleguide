build:
	stylus --include css --include-css < css/index.styl > css/index.css
	./fix-utf8-problem