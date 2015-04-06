Auth0 Styleguide
================

Auth0 Product Style Guide. Use from our CDN!

<img src="https://i.cloudup.com/xJ2BeIkuhR.png" />

## Usage

We encourage to use our CDN resource, but if you want to extend you can either use [Component(1)][component-home] or [Bower][bower-home] for that.
Instructions on the build process are detailed below.

### CDN
Using our CDN is the simplest solution. Just add the following line in your project's HTML head and you are done.

~~~html
<link href="https://cdn.auth0.com/styleguide/latest/index.css" rel="stylesheet" />
~~~

If you require any other asset listed under the `lib` folder, you can follow a simple rule: `https://cdn.auth0.com/styleguide/latest/<path-to-asset-under-lib>`

For example, if you want to retrieve our logo:

```html
<!-- Retrieving the logo at `lib/logos/img/badge.png` -->
<img src="https://cdn.auth0.com/styleguide/latest/lib/logos/img/badge.png">
```

### Bower

Bower usage is only recomended when you plan to extend the styleguide from build. If that's not the case just use our CDN as described [above][cdn-hash].

#### Install

```bash
bower install auth0/styleguide
```

```json
{
  "dependencies": {
    "auth0-styleguide": "auth0/styleguide"
  }
}
```

#### Build

Since we use stylus for compiling our assets. So you should translate this build tasks to your own build process:

For building the styles: `stylus --include-css --include . --resolve-url --out <your_dest_path> index.styl`

For copying assets: `cp -R lib/**/* <your_dest_path>`

You should have a final structure like this:

```
<your_dest_path>/
|- lib/
|  |- ...
| - index.css
```

#### Usage

With a build process well defined, you can now include the styleguide from your `index.styl`

```stylus
// use all styleguide styles
@include 'bower_components/auth0-styleguide'

// define your own
body.my-custom
  .styles-here
    color: red;
```

Or perhaps you would just want to extend parts of it by

```stylus
// use only colors
@include 'bower_components/auth0-styleguide/lib/vars'

// and override color_red
color_red = '#ff0000';
```

### Component(1)

Component usage is only recomended when you plan to extend the styleguide from build. If that's not the case just use our CDN as described [above][cdn-hash].

The following details on installation and usage are made according to the latest component version. Check Component's [guide][component-guide] for more information.

#### Install

`component install auth0/styleguide`

```json
{
  "dependencies": {
    "auth0/stylguide": "2.0.0"
  }
}
```

#### Build

When using component you will have to build your styles using styleguide with a build step for stylus support.

Basically, you will have to reproduce the line: `stylus --include-css --include ./components [files]` from Stylus [Javascript API][stylus-api-home].

This is an example for a [component-builder][component-builder-home] plugin setup.

```js
// stylus-plugin.js
var stylus = require('stylus');

module.exports = function stylusPlugin(file, done) {
  if (file.extension !== 'styl') return done();

  file.read(oncontents);

  function oncontents (err, string) {
    if (err) return done(err);

    var renderer = stylus(string, {
      // add `./components/` folder for lookup
      paths: [process.cwd() + '/components']
    });

    // set `--include-css` flag
    renderer.set('includeCSS', true);

    renderer.render(function (err, result) {
      if(err) return done(err);
      file.extension = 'css';
      file.string = result;
      done();
    });
  }
}

// build.js
var stylus = require('./stylus-plugin.js');
var Builder = require('component-builder');

Builder.styles(tree)
  .use(stylus)
  .end(function (err, result) {
    // done
  });
```

#### Usage

With a build process well defined, you can now include the styleguide from your `index.styl`

```stylus
// use all styleguide styles
@include 'auth0/styleguide/2.0.0'

// define your own
body.my-custom
  .styles-here
    color: red;
```

Or perhaps you would just want to extend parts of it by

```stylus
// use only colors
@include 'auth0/styleguide/2.0.0/lib/vars'

// and override color_red
color_red = '#ff0000';
```

## Licence

All the logos and branding are Auth0's property.

<!-- Resources -->
[cdn-hash]: #cdn
[component-home]: https://github.com/componentjs/component
[bower-home]: https://bower.io
[stylus-api-home]: http://learnboost.github.io/stylus/docs/js.html
