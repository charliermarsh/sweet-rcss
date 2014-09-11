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
// Becomes...
var bigRed = RCSS.registerClass({ color: 'red', fontSize: '32px' }).className;
```

As a more complete example, you might have:

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
