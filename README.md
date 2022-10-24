# tailwindcss-nmp

Add equal **N**egative **Margin** and **P**adding to an element. Has the same variations as the margin and padding utilities:

- `nmp` - top, right, bottom, and left
- `nmpx` - right, and left
- `nmpy` - top, and bottom
- `nmpt` - top
- `nmpr` - right
- `nmpb` - bottom
- `nmpl` - left

Uses values from the `spacing` key in your theme.

## Installation

```sh
npm i -D tailwindcss-nmp
```

```sh
yarn add -D tailwindcss-nmp
```

Add the plugin to your `tailwind.config.js`

```js
const nmpPlugin = require('tailwindcss-nmp')

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  // ...the rest of your config
  plugins: [nmpPlugin],
}
```

## Usage

You can use the variant added by this plugin just like you would `hover:` or `focus:`:

```html
<div className="nmp-8">I'm a box</div>
<div className="nmpx-4"></div>
```

```css
.nmp-8 {
  margin: calc(1rem * (-1));
  padding: 1rem;
}

.nmpx-4 {
  margin-left: calc(1rem * (-1));
  padding-left: 1rem;
  margin-right: calc(1rem * (-1));
  padding-right: 1rem;
}
```
