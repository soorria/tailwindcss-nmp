# tailwindcss-nmp

Add equal **N**egative **Margin** and **P**adding to an element. Has the same variantions as the margin and padding utilities:

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
<button className="hocus:text-red-700">Click Me!</button>
```

```css
.hocus\:text-red-700:hover,
.hocus\:text-red-700:focus {
  --tw-text-opacity: 1;
  color: rgb(185 28 28 / var(--tw-text-opacity));
}
```
