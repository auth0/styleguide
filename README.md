Auth0 Styleguide
================

Auth0 Product Style Guide. Use from our CDN!

<img src="https://i.cloudup.com/xJ2BeIkuhR.png" />

## Usage

We encourage to use our CDN resource, but if you want to extend you can use either Component(1) or Bower for that.
Instructions below.
### CDN
Just add this in your project's HTML and you are done.

~~~html
<link href="https://cdn.auth0.com/styleguide/latest/index.css" rel="stylesheet" />
~~~

If you require any other asset listed under the `lib` folder, you can follow a simple rule:

> Add `https://cdn.auth0.com/styleguide/latest/` to the asset path, like below.

```html
<!-- I need the logo under `lib/logos/img/badge.png` -->

<img src="https://cdn.auth0.com/styleguide/latest/lib/logos/img/badge.png">
```

### Component(1)

Component usage is only recomended when you plan on extending base colors or mixins.

### Bower

Bower usage is only recomended when you plan on extending base colors or mixins.

## Licence

All the logos and branding are Auth0's property.
