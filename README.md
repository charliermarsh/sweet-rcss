sweet-rcss
===

An experiment in sweeting your JavaScript for use with [RCSS](https://github.com/chenglou/RCSS). Built with [Sweet.js](http://sweetjs.org/) and [jsx-reader](https://github.com/jlongster/jsx-reader).

## Usage

[RCSS](https://github.com/chenglou/RCSS) allows you to handle all of your CSS styling with pure JavaScript. The macros in this repository allow you to drop-in styles from your stylesheet (i.e., following standard CSS syntax) and compile them to RCSS declarations.

For example:

```js
rcss bigRed {
    color: 'red';
    fontSize: '32px'
}
// ...becomes...
var bigRed = RCSS.registerClass({ color: 'red', fontSize: '32px' }).className;
```

LESS-style mixins are also supported through the following syntax:

```js
rcss big {
    fontSize: '32px';
}

rcss red {
    color: 'red';
}

// bigRed implements both of the above styles
rcss bigRed {
    big;
    red;
}
```

The variables bound to `big` and `red` are the CSS classname that enforces their respective styles. As a more complete example, then, you might have:

```js
var React = require('react');
var RCSS = require('rcss');

rcss bigRed {
    color: 'red';
    fontSize: '32px'
}

RCSS.injectAll();

var Component = React.createClass({
    render: function() {
        return <div className={bigRed}>
            Hello, world!
        </div>;
    }
});
```

## License

MIT.
