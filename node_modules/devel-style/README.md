<!--
@Author: Andreee Ray <develdoe>
@Date:   2017-04-10T17:45:02+02:00
@Email:  me@andreeray.se
@Filename: README.md
@Last modified by:   develdoe
@Last modified time: 2017-04-11T14:16:50+02:00
-->

=========

    Stylesheet to help you develop a new site's html markup.

    ![devel-style](https://imgur.com/t6UXaq9)

## Installation

    npm install devel-style --save-dev

## Requirements


`npm install style-loader css-loader --save-dev`

webpack.config.js

```js
module: {
    rules: [
        {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        }
    ]
}
```

## Usage

import:

```js
import '{path to node_modules}/devel-style/devel-style.css'
```
add #background id to body & #app id to your wrapper div:

```html
...
<body id="background">
    <div id="app">
...
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.

## Release History

* 1.0 Initial release
