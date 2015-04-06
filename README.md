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

### Component(1)

Component usage is only recomended when you plan on extending base colors or mixins.

### Bower

Bower usage is only recomended when you plan on extending base colors or mixins.

## Licence

All the logos and branding are Auth0's property.

<!-- Resources -->
[component-home]: https://github.com/componentjs/component
[bower-home]: https://bower.io
